import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { TextForm } from './Components/TextForm';
import { AboutUs } from './Components/AboutUs';
import React, { useState } from 'react'; 
import { Aleart } from './Components/Aleart';

function App() {

  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{


  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
    
    <Navbar title="navbar" hometext="Home2" mode={mode} toggleMode={toggleMode}/>
    <Aleart alert="this is alert"></Aleart>
    <div className='container'>
      <TextForm formheading="Enter Your Text Here" mode={mode}/>

    </div>
   
        <AboutUs mode={mode}/>
        
    </>
  );
}

export default App;
