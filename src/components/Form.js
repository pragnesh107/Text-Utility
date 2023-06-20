import { useState } from "react";
import React from "react";

export default function Form(props) {
  const [text, setText] = useState('')
  const [emailCollection, setEmailCollection] = useState([]);

  const extractEmails = () => {
    const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const extractedEmails = text.match(regex);
    setEmailCollection(extractedEmails);
    props.showAlert("Email Extracted!","success")
  };
  
  const upClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text Changed To UpperCase!","success")
  }

  const lowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text Changed To LowerCase!","success")

  }
  const clear = ()=>{
    let newText = ('');
    setText(newText)
    setEmailCollection([])
    props.showAlert("TextBox Clear","success")
  }
  const copy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success")
  }

  const changed = (event)=> {
    setText(event.target.value)
  }

  return (
    <div className="container my-3">
      <div className="mx-5">
        <label htmlFor="textarea" className="form-label fs-4">
        <b>Enter Text To Analyze</b>
        </label>
        <textarea className="form-control border border-primary" value={text} id="txta1" rows="8" onChange={changed}></textarea>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={upClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={lowClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={copy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={clear}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={extractEmails}>Extract Emails</button>
      </div>
      <div className="mx-5">
        <h3><b>Summary</b></h3>
        <p>Words : {text.split(/\s+/).filter((ele)=>{return ele.length !==0}).length}, Characters (including Spaces) : {text.length}</p>
        <p>Emails: {emailCollection.join(', ')}</p>
      </div>
    </div>
  );
}
