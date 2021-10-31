import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Textform";
import React, { useState } from 'react'
function App() {
  const [mode,setDarkMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setDarkMode('light');
      document.body.style.backgroundColor='white';

    }

  }
  return (
    <>
      <Navbar Title="Textutils" About="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <TextForm Heading="Enter Text in below Area" mode={mode}/>
      {/* <AboutUs/> */}
    </>
  );
}

export default App;