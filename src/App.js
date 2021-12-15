// import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
       msg: message,
       type: type
    })
    setTimeout(()=>{
       setAlert(null)  
    },1500);
  } 
  const togglemode = () =>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enables", "success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enables", "success");
    }
  }

  
  return (
    <>
    {/* <Router> */}
     <Navbar title = "Myapp" mode={mode} togglemode={togglemode}/>
     <Alert alert={alert}/> 
     <div className="container">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm heading ="Enter the Text below" showAlert={showAlert} mode={mode}/>
          {/* </Route>
      </Switch>
      <About/> */}
     </div>
    {/* </Router> */}
    </>
  );
}

export default App;
