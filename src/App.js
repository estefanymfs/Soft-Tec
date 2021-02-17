import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/BodyPage/Home';
import Footer from './components/pages/Footer/Footer';
import Service from './components/pages/Services/Service';
import About from './components/pages/About-us/About';
import Contact from './components/pages/Contact-us/Contact'
import ListServices from './components/pages/List-Service/ListServices';
import Cotizacion from './components/Cotizacion';
import  Chatbot from './components/chatbot/chatbot';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/service' exact component={Service}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact} />
        <Route path='/listservices' exact component={ListServices}/>
        <Route path='/cotizacion' exact component={Cotizacion}/>
      </Switch>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </Router>
  );
}

export default App;