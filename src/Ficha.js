import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Ficha.css'

class Ficha extends React.Component {

    render () {
        return (
            <div>
                <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-info">
                    <div className="panel-heading"><h3>Ficha Personal</h3></div>
                        <div className="panel-body">
                            <div className="col-6 col-lg-4">
                                <img src={require('./User.png')} />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-8">
                                <h5>Nombre</h5>
                                <hr></hr>
                                <h5>Carrera</h5>
                                <hr></hr>
                                <h5>Rol</h5>
                                <hr></hr>
                                <div className="col-sm-6 col-sm-offset-3">
                                    <button type="button" class="btn btn-danger">Atrás</button>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Ficha;