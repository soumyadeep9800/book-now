// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Wer from './components/Wer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React,{ useState } from 'react';
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type,
    });
    setTimeout(() => {
      setAlert(null);
    },1200);
  };
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#060e32';
      document.body.style.cursor = "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22%3E%3Ccircle cx=%2212%22 cy=%2212%22 r=%2210%22 fill=%22blue%22 /%3E%3C/svg%3E') 12 12, auto";
      showAlert("Dark mode enable","Success"); 
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.cursor = 'auto';
      showAlert("light mode enable","Success");
    }
  };
  
  return (
    <>
 {/* <Navbar mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert} />
 <div className="container my-3">
 <TextFrom heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
 </div> */}

 <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<Wer  mode={mode}/>} />
            <Route exact path="/" element={<TextFrom heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;






// old code with harry but now react has updated 
{/* <Router> //old code
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<Switch>
          <Route exact path="/about">
            <Wer />
          </Route>
          <Route exact path="/">
          <TextFrom heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
</Switch>
</div>
<Wer/>
</Router> */}