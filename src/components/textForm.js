import Form from 'react-bootstrap/Form';
import React ,{useState} from 'react';
function TextForm(props) {
    const handleUpClick=event =>{
        event.preventDefault();
        // above code is used to prevent the reloading of browser
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handlelowClick=event =>{
        event.preventDefault();
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClrClick=event=>{
        event.preventDefault();
        setText("");
    }
    const handleExtraSpaces=event=>{
      event.preventDefault();
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const [text,setText]=useState("");

  return (
    <>
    <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label >Text Area</Form.Label>
        <Form.Control as="textarea" rows={10} value={text} onChange={handleOnChange} placeholder="Enter text here"/>
      </Form.Group>
      <button className='btn btn-primary m-1' onClick={handleUpClick} >UPPER CASE</button>
      <button className='btn btn-primary m-1' onClick={handlelowClick}>lower case</button>
      <button className='btn btn-primary m-1' onClick={handleClrClick}>clear</button>
      <button className='btn btn-primary m-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </Form>
    <div className="container my-3">
        <h4>Text Summary</h4>
        <p> {text.length} characters,{text.split(" ").length} words</p>
        <p>{0.008*text.split(" ").length} Average minutes to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  );
}

export default TextForm;