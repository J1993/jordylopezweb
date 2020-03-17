import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Home}></Route>
        <Route path="/Portfolio" component={Portfolio}></Route>
        <Route path="/About" component={About}></Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
