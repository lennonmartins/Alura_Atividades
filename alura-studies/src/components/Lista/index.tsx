import React from 'react';
import './style.scss'

export default function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '01:30:00'
    },
    {
        tarefa: 'JavaScrpit',
        tempo: '02:00:00'
    },
    {
        tarefa:'Java',
        tempo: '01:00:00'
    }]
    return (
        <aside className="listaTarefas">
            <h3>Estudo do dia</h3>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className="item" >
                        <h3 >{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}