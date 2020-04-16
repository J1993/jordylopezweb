import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';

function App() {
    return (
        <BrowserRouter>
            <div className="App">

                <NavBar />

                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/portfolio" component={Portfolio}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="*" component={function NoMatch() {
                        let location = useLocation();

                        return (
                            <div className="center-align white-text">
                                <h3>No match for <code>"{location.pathname}"</code></h3>
                            </div>);
                        }}>
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
}
export default App;