import React, { useState } from "react";

export default function Textform(props) {

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  /* "enter text here " is default value here and it will store in a text varible 
  and whenever we want to update entered text we will call settextfunction.and over page updated without loading of page.*/
  let noOfWords = text.split(" ").length;
  if (text === "") {
    noOfWords = 0;
  }

  const clearText = () => {
    setText("");
  }

  const revWords = () => {
    let newText = text.split(' ');
    let reword ="";
    for (let i = 0; i < newText.length; i++) {
      reword = `${newText[i].split('').reverse().join('')}`;
        newText[i]=reword;
    }
    reword=newText.join(' ');
    setText(reword);
  }
  
  const revText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
  }
  const removeWhiteSpace=()=>{
    let newText=text.split(' ').filter(s => s).join(' ');
    setText(newText);
  }
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <div className="my-3" >
          < label htmlFor="exampleFormControlTextarea1" className="form-label" >
            <h6>{props.Heading}</h6></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',
            color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-success mx-3" onClick={handleLowerCase}>Convert to LowerCase</button>
        <button className="btn btn-secondary mx-3" onClick={revWords}>Reverse Words</button>
        <button className="btn btn-warning mx-3" onClick={revText}>Reverse Text</button>
        <button className="btn btn-info mx-3" onClick={removeWhiteSpace}>Remove extra White space</button>
        <button className="btn btn-danger mx-3" onClick={clearText}>Clear</button>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{noOfWords} words and {text.length} Characters</p>
        <p>{0.008 * noOfWords}Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>

  );
}