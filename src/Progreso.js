import React from 'react';
import './.d3plus';
import "../node_modules/d3";
import "./Progreso.css";
import { LinePlot } from "d3plus-react";


class Chart extends React.Component {
    state = {
        data: [
            {"year": 1991, "name":"alpha", "value": 17},
            {"year": 1992, "name":"alpha", "value": 20},
            {"year": 1993, "name":"alpha", "value": 25},
            {"year": 1994, "name":"alpha", "value": 33},
            {"year": 1995, "name":"alpha", "value": 52},
            {"year": 1991, "name":"beta", "value": 36},
            {"year": 1992, "name":"beta", "value": 32},
            {"year": 1993, "name":"beta", "value": 40},
            {"year": 1994, "name":"beta", "value": 58},
            {"year": 1995, "name":"beta", "value": 13},
            {"year": 1991, "name":"gamma", "value": 24},
            {"year": 1992, "name":"gamma", "value": 27},
            {"year": 1994, "name":"gamma", "value": 35},
            {"year": 1995, "name":"gamma", "value": 40}
        ]
    };
    render () {
        const {data} = this.state;
        const config = {
            data,
            x: "year",
            y: "value",
            text: "name"
        };
        return (
            <div>
                <h1>Progreso: </h1>
                <div className="row">
                <div className="col-6">
                    <h3>Agrega tus resultados de hoy: </h3>
                    <div className="panel panel-info">
                        <div className="panel-heading">Ejercicios</div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Ejercicio 1</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Número de Repeticiones"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Ejercicio 2</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Número de Repeticiones"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword">Cardio</label>
                                    <input type="text" className="form-control" id="exampleInputPassword" placeholder="Tiempo de Cardio"/>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
        );
    }
}

export default Chart;
