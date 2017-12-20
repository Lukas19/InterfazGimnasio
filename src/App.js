import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import Breadcrumbs  from 'react-router-dynamic-breadcrumbs';
import NavBar from './NavBar';
import Login from './Login';
import Welcome from './Welcome';
import Ficha from './Ficha';
import './App.css'

const routes = {
    '/': 'Home',
    '/welcome': 'Welcome',
    '/welcome/Ficha': 'Ficha Personal'
};

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/welcome" component={Welcome}/>
                    <Route exact path="/welcome/ficha" component={Ficha}/>
                </switch>
            </div>

        );
    }
}

export default App;