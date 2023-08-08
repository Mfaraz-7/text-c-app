import React, { useState } from "react";
import "./App.css";

const TextForm = () => {

     const [text, setText] = useState("Enter text here");
     // UpperCase function 
     const handleUpperCaseClick = () => {
          let upperCaseText = text.toUpperCase();
          setText(upperCaseText);
     };
     // LowerCase function 
     const handleLowerCaseClick = () => {
          let lowerCaseText = text.toLowerCase();
          setText(lowerCaseText);
     };
     // CopyText function 
     const copyText = () => {
          let textarea = document.getElementById("myBox")
          textarea.select();
          navigator.clipboard.writeText(textarea.value)
     };
     // Remove extra spaces 
     const removeExtraSpaces=()=>{
          let removedSpace = text.split(/[ ]+/)
          setText(removedSpace.join(" "))
     }
     // ClearText function 
     const clearTextArea = () => {
          let clearTextArea = "";
          setText(clearTextArea);
     };
     const handleOnChange = (e) => {
          setText(e.target.value);
     }; 


     return (
          <>
               <div className="form-div">
                    <h2>Enter the text to analyze</h2>
                    <div className="mb-3">
                         <label for="myBox" className="form-label">
                              Example textarea
                         </label>
                         <textarea 
                              className="form-control"
                              id="myBox"
                              rows="8"
                              value={text}
                              onChange={handleOnChange}
                         ></textarea>
                    </div>
                    <div className="buttons-div">
                         <button className="btn btn-primary" onClick={handleUpperCaseClick}>
                              Convert to Uppercase
                         </button>
                         <button className="btn btn-success" onClick={handleLowerCaseClick}>
                              Convert to Lowercase
                         </button>
                         <button className="btn btn-secondary" onClick={copyText}>
                              Copy Text
                         </button>
                         <button className="btn btn-warning" onClick={removeExtraSpaces}>
                              Remove Extra Spaces
                         </button>
                         <button className="btn btn-danger" onClick={clearTextArea}>
                              Clear Textarea
                         </button>
                    </div>
                   
               </div>
               <div className="content">
                    <h2>Your text summary</h2>
                    <p>
                         {text.length} : <mark style={{backgroundColor: 'lightgray', padding: '5px'}}>Charactes</mark> 
                         {text.split(" ").length} : <mark style={{backgroundColor: 'lightgray', padding: '5px'}}>Words</mark>
                    </p>
                    <p>{0.008 * text.split(" ").length}: Minutes to read</p>
                    <h3 id="preview">Preview</h3>
                    <span id="pre">{text}</span>
               </div>
          </>
     );
};

export default TextForm;
