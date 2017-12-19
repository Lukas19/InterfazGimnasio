import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Welcome from './Welcome'

class App extends React.Component {
    render() {
        return (
            <div className="Welcome">
                <div className="Bar">
                    <NavBar/>
                </div>
                <switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/welcome" component={Welcome}/>
                </switch>
            </div>

        );
    }
}

export default App;