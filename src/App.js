import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Home}></Route>
        <Route path="/Portfolio" component={Portfolio}></Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
