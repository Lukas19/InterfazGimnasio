import React from 'react';
import {Redirect} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css'

class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fireRedirect: "Null"
        };
    }

    render () {
        const {fireRedirect} =  this.state; //Esta línea ahorra escribir abajo this.state.fireRedirect
        if (fireRedirect === "Ficha"){
            return <Redirect to='/welcome/ficha'/>;
        }
        else if (fireRedirect === "Horario"){
            return <Redirect to='/welcome/horario'/>;
        }
        else if (fireRedirect === "Progreso"){
            return <Redirect to='/welcome/progreso'/>;
        }
        return (
            <div>
                <div className="row">
                    <div className="col-md-8" >
                        <h1>Bienvenido Usuario</h1>
                        <h2>¿Qué desea realizar?</h2>
                    </div>
                    <div className=".col-md-4">
                        <img src={require('./User.png')} />
                    </div>
                </div>

                <div className="row">
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({fireRedirect: "Ficha"})}>Revisar Ficha</button>
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({fireRedirect: "Horario"})}>Horario y Reserva</button>
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({fireRedirect: "Progreso"})}>Progreso</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Welcome;