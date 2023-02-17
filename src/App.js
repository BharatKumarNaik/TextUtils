import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import BasicExample from './components/NavBar';
import TextForm from './components/textForm';
import About from './components/About';
import React ,{useState} from 'react';

function App() {
const handleMode=()=>{
  console.log("click is working");
  // console.log(myStyle);
  if(myStyle.color==="black"){
    setStyle({
      color:"white",
      background:"#212529",
      height:"1000px"
  })
  }
  else{
    setStyle({
      color:"black",
      background:"white"
  })
  }
}

const [myStyle,setStyle]=useState({color:"black"});
  return (
    <BrowserRouter>
    <div className="App" style={myStyle}>
      <BasicExample title="Text Utils" />
      <button className='btn btn-primary m-1' onClick={handleMode}>mode</button>
      <Routes>
        <Route path="/" exact element={<TextForm heading="Enter the text to analyze"/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<TextForm heading="Enter the text to analyze"/>} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}
export default App;
