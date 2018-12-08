import React, { Component} from 'react'
import {Link, Router} from 'react-router-dom'
import Route from '../../node_modules/react-router-dom/Route';


const TAREFAS = [
    {
        id: 1,
        titulo: 'Aprender React',
        descricao: 'is simply dummy text of the printing and typesetting industry.',  
    },
    {
        id: 2,
        titulo: 'Aprender JavaScript',
        descricao: 'orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown',  
    },
    {
        id: 3,
        titulo: 'Aprender React-Router',
        descricao: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece',  
    },
];

class TarefasPage extends Component {
    render() {
        return(
            <div>
                <ul>
                    {
                        TAREFAS.map((tarefa, index)=>{
                            return(
                                <li key={tarefa.id} >
                                    <Link to={`/tarefas/${tarefa.id}`}>
                                        {tarefa.titulo}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route
                    path="/tarefas/:tarefaId"
                    render={props => {
                        const tarefaId = props.match.params.tarefaId;
                        const tarefa = TAREFAS.find(tar => tar.id == tarefaId )
                        return(
                            <div>
                                <p>{tarefa.descricao}</p>
                            </div>
                        )
                    }}
                />

            </div>
        )
    }
}
export default TarefasPage