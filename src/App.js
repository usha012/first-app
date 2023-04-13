import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { TextForm } from './Components/TextForm';
import { AboutUs } from './Components/AboutUs';
import React, { useState } from 'react'; 
import { Aleart } from './Components/Aleart';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout( ()=>{
      setAlert(null)

    }, 3000);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }


  return (
    <>
    
    <Aleart alert={alert}></Aleart>
    {/* <div className='container'>
      <TextForm showAlert={showAlert} formheading="Enter Your Text Here" mode={mode}/>
    </div> */}
   
    {/* <AboutUs mode={mode}/> */}

    <BrowserRouter>
    <Navbar title="navbar" hometext="Home" mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path="/" element={ <TextForm showAlert={showAlert} formheading="Enter Your Text Here" mode={mode}/>} />
          <Route path="/aboutus" element={<AboutUs mode={mode}/>} />
        </Routes>
    </BrowserRouter>
        
    </>
  );
}

export default App;
