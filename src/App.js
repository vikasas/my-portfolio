import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import Skills from './components/Skills';
import About from './components/About'
import Projects from './components/Projects';
import Practice from './components/Practice';
import Contact from './components/Contact';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  ScrollTop  from './components/ScrollTop';
import { Toaster } from "react-hot-toast";


function App() {
  const [visible , Setvisible] = useState(true);
  useEffect(function(){
    const time = setInterval(function(){
      Setvisible(c => !c);
    },5000)
    return function(){
      clearInterval(time);
    }
  },[])
  return (
    <Router>
      <Header/>
      <ScrollTop/>
      <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      <Routes>
        <Route path= "/"  element ={<Body/>}/>
        <Route path='"/'  element ={<Skills/>}/>
        <Route path ='/about' element = {<About/>}/>
        <Route path = "/projects" element ={<Projects/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path = "/practice" element ={ <Practice/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
