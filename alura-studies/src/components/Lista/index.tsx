import React, { useState } from 'react';
import Iten from './Iten';
import style from './Lista.module.scss'

export default function Lista() {
    const [tarefas, setTarefas ] = useState([{
        tarefa: 'React',
        tempo: '01:30:00'
    },
    {
        tarefa: 'JavaScrpit',
        tempo: '02:00:00'
    },
    {
        tarefa: 'Java',
        tempo: '01:00:00'
    }]);
    return (
        <aside className={style.listaTarefas}>
            <h2
            onClick={ () => { setTarefas([...tarefas, {tarefa: " to aprendendo", tempo: "05:00:00"}])}}
            
            >Estudo do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Iten
                        key={index}

                        //essa opção
                        tarefa={item.tarefa}
                        tempo={item.tempo}

                        // ou {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}