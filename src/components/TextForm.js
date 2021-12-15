import React, {useState} from 'react'

export default function TextForm(props) {
    const handleonclick = () =>{      
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Convert to Uppercase", "success");
    }
    const handlelowclick = () =>{
       let newtext = text.toLowerCase();
       setText(newtext);
       props.showAlert("Convert to Lowercase", "success");
    }
    const handlecopy = () =>{
        var tet = document.getElementById('mybox');
        tet.select();
        navigator.clipboard.writeText(tet.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handlecleartext = () =>{
        setText("");
        props.showAlert("Clear text", "success");
    }
    const handlespaces = () =>{
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleonchange = (event) =>{
        setText(event.target.value);  
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea id="mybox"  className="form-control" rows="8" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleonclick}> convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowclick}> convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handlecleartext}> clear text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}> copy text</button>
        <button className="btn btn-primary mx-2" onClick={handlespaces}> Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length } minute read</p>
            <h3>Text preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
