
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Pagenot from './Pagenot';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/service' Component={Service}/>
        <Route exact path='/portfolio' Component={Portfolio}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route path='*' Component={Pagenot}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
