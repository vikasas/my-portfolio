import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import Skills from './components/Skills';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path= "/"  element ={<Body/>}/>
        <Route path='"/'  element ={<Skills/>}/>
        <Route path ='/about' element = {<About/>}/>
        <Route path = "/projects" element ={<Projects/>} />
        <Route path="/contact" element ={<Contact/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
