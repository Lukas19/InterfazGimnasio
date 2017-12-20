import React from 'react';
import {Redirect} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            password: "",
            fireRedirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({mail: event.target.mail});
    }

    handleSubmit(event) {
        this.setState({
            fireRedirect: true,
        });
        event.preventDefault();
    }

    render() {
        const {fireRedirect} =  this.state; //Esta línea ahorra escribir abajo this.state.fireRedirect
        if (fireRedirect){
            return <Redirect to='/welcome'/>;
        }
        return (
            <div>
                <div className="col-sm-6 col-sm-offset-3">
                    <h1>Gimnasio USM</h1>
                </div>
                <div className="login">

                    <div className="col-sm-6 col-sm-offset-3">

                        <div className="panel panel-primary">
                            <div className="panel-heading">Login</div>

                            <div className="panel-body">

                                <form onSubmit={this.handleSubmit}>
                                    <div className={"form-group"}>
                                        <label>
                                            Nombre:
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                placeholder="Ingrese su email"
                                                id="emailHelp"
                                                aria-describedby="emailHelp"
                                                value={this.state.mail}
                                                onChange={this.handleChange}/>
                                            <small id="emailHelp" className="form-text text-muted">
                                                No olvide utilizar su mail USM
                                            </small>

                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            Password:
                                            <input type="password"
                                                   className="form-control form-control-lg"
                                                   id="exampleInputPassword1"
                                                   placeholder="Password"
                                                   password={this.state.password}
                                                   onChange={this.handleChange}/>
                                        </label>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value="Submit"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;