import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Footer from './components/Footer';
import Textform from './components/Textform';
// import { useState } from 'react';
import React, { useState } from 'react'
import Alert from './components/Alert';

// import About from './components/About';
// import {}

function App() {

  const [mode, setMode] = useState("dark");
  // setMode("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type:type
    });

    setTimeout(() => {
      setAlert(null);
    },3000);

  };

const toggleStyle = ()=>{
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode is Enabled", "success");
    }else{
      setMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "dark";
      showAlert("Light Mode is Enabled", "success");
    }
};




  return (
  <>
  <Navbar mode = {mode} funfun = {toggleStyle}/> 
  <Alert alert = {alert}/>
  <Text/> 
  <Textform mode = {mode}  alert = {alert} heading  = "Input The text to Modify :" showAlert = {showAlert}/>
  <img src='logo192.png' alt='logo' id='icon'></img>
  <Footer/>
  {/* <About/> */}
  </>
  );
} 

export default App;
