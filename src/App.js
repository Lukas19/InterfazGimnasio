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
import Horario from './Horario';
import Chart from './Progreso';
import './App.css'

const routes = {
    '/': 'Home',
    '/welcome': 'Welcome',
    '/welcome/ficha': 'Ficha Personal',
    '/welcome/progreso': 'Progreso'
};

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Breadcrumbs mappedRoutes={routes} />
                        <switch>
                            <Route exact path="/" component={Login}/>
                            <Route exact path="/welcome" component={Welcome}/>
                            <Route exact path="/welcome/ficha" component={Ficha}/>
                            <Route exact path="/welcome/horario" component={Horario}/>
                            <Route exact path="/welcome/progreso" component={Chart}/>
                        </switch>
                    </div>
                </Router>
            </div>

        );
    }
}

export default App;