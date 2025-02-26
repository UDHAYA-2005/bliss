// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Service from './Service';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Footer/>
    </Router>
  );
};

export default App;