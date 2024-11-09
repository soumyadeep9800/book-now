import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState(""); // State for text
  const [copyMessage, setCopyMessage] = useState(""); // State for copy confirmation

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert yo uppercase");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert yo lowercase");
  };

  const handleCopy = () => {
    const textArea = document.getElementById("myBox");
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile compatibility
    props.showAlert("Text is copied");
    navigator.clipboard.writeText(textArea.value)
      .then(() => {
        setCopyMessage("Text copied!");
        setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra space cleared");
  };

  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Reversed");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

   // Define custom cursor for dark mode
   const customCursorStyle = {
    cursor: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22><circle cx=%2212%22 cy=%2212%22 r=%2210%22 fill=%22blue%22 /></svg>') 12 12, auto"
  };
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#060e32' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Enter text here:</label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#060e32', ...(props.mode === 'dark' ? customCursorStyle : {}) }}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        {copyMessage && <p className="text-success">{copyMessage}</p>}
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      
      <div className="container my-3"style={{ color: props.mode === 'dark' ? 'white' : '#060e32' }}>
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").filter((word) => word.length > 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((word) => word.length > 0).length} minute read</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </>
  );
}
