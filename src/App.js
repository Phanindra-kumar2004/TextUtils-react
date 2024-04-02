
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='TextUtils' about='About'/> 
      <div className="container">
        <TextForm heading="Enter your text to analyse"/>
      </div>
    </>
  )
}

export default App;
