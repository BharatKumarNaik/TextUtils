import './App.css';
import BasicExample from './components/NavBar';
import TextForm from './components/textForm';
function App() {
  return (
    <div className="App" >
      <BasicExample title="Text Utils"/>
      <TextForm heading="Enter the text to analyze"/>
    </div>
  );
}

export default App;
