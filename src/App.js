
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Pagenot from './Pagenot';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
  
    <Route exact path='/' Component={Home}/>
    <Route exact path='/about' Component={About}/>
    <Route exact path='/contact' Component={Contact}/>
    <Route exact path='/service' Component={Service}/>
    <Route path='*' Component={Pagenot}/>
    
    
    </Routes>
    
    


    </>
      
    
  );
}

export default App;
