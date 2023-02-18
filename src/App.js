import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import BasicExample from './components/NavBar';
import TextForm from './components/textForm';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App" id="click">
      <BasicExample title="Text Utils" />
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
