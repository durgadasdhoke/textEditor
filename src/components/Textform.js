import React ,{useState} from 'react'

export default function Textform(props) {
    
  const [text , setText] = useState("");

    const onChangeHandler = (event)=>{
        // console.log("onChange fired")
        setText(event.target.value);
        
    };
    const onclickuphandler = ()=>{
        // console.log('onClick fired');
        let newText = text.toUpperCase();
        setText(newText);
        if(text === "")
        {
          props.showAlert(" Please Enter Something to perform Operations","warning");
        }else{
          props.showAlert(" Successfully converted to Uppercase","success");
        }
      };
      const onclicklohandler = ()=>{
        // console.log('onClick fired');
        let newText = text.toLowerCase();
        setText(newText);
        if(text === "")
        {
          props.showAlert(" Please Enter Something to perform Operations","warning");
        }else{
          props.showAlert(" Successfully converted to Lowercase","success");
        }
    };
    
    const onclickclearhandler = ()=>{
        // console.log('onClick fired');
        let newText = "";
        setText(newText);
        if(text === "")
        {
          props.showAlert(" Please first Enter something to clear","warning");
        }else{
          props.showAlert(" Successfully Deleted the Text","success");
        }
    };
    
    const onclickcopyhandler = ()=>{
        // console.log('onClick fired');
        navigator.clipboard.writeText(text);
        if(text === "")
        {
          props.showAlert(" Please first Enter something to Copy","warning");
        }else{
          props.showAlert(" Successfully Copied the Text","success");
        }
    };
    
    

  return (
    <>
    <div>
     <h1>{props.heading}</h1>
      <textarea className={`text-${props.mode} bg-${props.mode==="light"?"dark":"light"}`} rows = {8} onChange = {onChangeHandler} value = {text}></textarea>
      {/* <textarea className={`text-light bg-dark`} rows = {8} onChange = {onChangeHandler} value = {text}></textarea> */}
    </div>
    <button className='btn btn-primary' onClick={onclicklohandler}> Convert to LowerCase</button>
    <button className='btn btn-primary my-3' onClick={onclickuphandler}> Convert to Uppercase</button>
    <button className='btn btn-primary my-3' onClick={onclickclearhandler}> Clear All</button>
    <button className='btn btn-primary my-3' onClick={onclickcopyhandler}> Copy All</button>
    <div className='container'>
      <h2>Your Text Summary :</h2>
      <p>Characters : {text.length} , Words : {text.split(" ").length}</p>
      <p> Reading Time : {0.008 * text.split(" ").length} Minutes</p>
      <h3>Preview : </h3>
      <p>{text}</p>
    </div>
    </>
  )
}
