import React, { Component } from 'react'

import Artigo from '../components/Artigo'
import Contador from '../components/Contador'

import {
    Alert, Button
} from 'reactstrap';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Alert color="info">Testando....</Alert>

                <Alert color="danger">Testando....2</Alert>

                <Button color="dark">Click Aqui!!!</Button>

                <Artigo
                    nome="Douglas"
                    texto="Progamação Web com React JS"
                />

                <Contador tempo={500} />
                <Contador tempo={700} />


                <header className="App-header">
                   
                    <p>
                        Testando <code>src/App.js</code> React.
                    </p>
                    <a className="App-link" href="https://reactjs.org" 
                        target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    <Artigo
                        nome="Burnes"
                        texto="Progamação Web com PHP"
                    />
                </header>
            </div>
        )
    }
}
export default HomePage