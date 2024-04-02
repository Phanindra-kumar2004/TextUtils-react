
import React , { useState } from "react"
import PropTypes from "prop-types"

export default function TextForm(props){
    const [text , setText] = useState("");
    const [letters, setLetters] = useState(0);
    const history = document.getElementsByClassName("history")[0];

    function change(event){
        setText(event.target.value);
        setLetters([event.target.value.length]);
    }
    function uppercase(){
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    function lowercase(){
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    function togglecase(){
        let newText = text.map((letter)=>{
            if ("A"<=letter && letter<="Z"){
                letter=letter.toLowerCase();
            }
            else if ("a"<=letter&&letter<="z")
                letter = letter.toUpperCase();
            return letter;
        });
        setText(newText);
    }
    const handleToggleCaseClick = () => {
        let words = text.split(" ");
        let newText = words
          .map((word) => {
            let newWord = "";
            for (let i = 0; i < word.length; i++) {
              let char = word.charAt(i);
              if (char >= "A" && char <= "Z") {
                char = char.toLowerCase();
              } else if (char >= "a" && char <= "z") {
                char = char.toUpperCase();
              }
              newWord += char;
            }
    
            return newWord;
          })
          .join(" ");
    
        setText(newText);
      };
    function clearText(){
        setText("");
    }

    function copyText(){
        navigator.clipboard.writeText(text);
    }

    function removeExtraSpaces(){
        let newwords = text.split(/[ ]+/);
        setText(newwords.join(" "));
    }
    return(
        <>
        
        <div>
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" data-bs-theme={'dark'} value={text} placeholder="Enter your text here" id="exampleFormControlTextarea1" rows="10" onChange={change}></textarea>
            </div>
            <button className="btn btn-danger mx-2" onClick={uppercase}>convert to uppercase</button>
            <button className="btn btn-danger mx-2" onClick={lowercase}>convert to lowercase</button>
            <button className="btn btn-danger mx-2" onClick={handleToggleCaseClick}>toggle case</button>
            <button className="btn btn-danger mx-2" onClick={clearText}>Clear text</button>
            <button className="btn btn-danger mx-2" onClick={copyText}>Copy text</button>
            <button className="btn btn-danger mx-2" onClick={removeExtraSpaces}>Remove expra spaces</button>
        </div>
        <div className="container my-5">
            <h1>
                Your text summary
            </h1>
            <p>your text contains {text.split(" ").length} words and {letters} characters</p>
            <p>Number of characters without space : {text.replaceAll(" ","").length}</p>
            <p>Number of sentences : {text.split(".").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
            <h3>history</h3>
            <div className="container-fluid history"></div>
        </div>
        </>
        
    )
}