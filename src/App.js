import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Textform";
import React, { useState } from 'react'
import Alert from "./Components/alert";
function App() {
  const [mode,setDarkMode]=useState('light');
  const [alert, setalert]=useState(null);
  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setalert(null);
    },1500);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been active", "success");
    }else{
      setDarkMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been active", "success");
    }
  }
  return (
    <>
      <Navbar Title="Textutils" About="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <TextForm Heading="Enter Text in below Area" mode={mode} showalert={showalert}/>
      {/* <AboutUs/> */}
    </>
  );
}

export default App;