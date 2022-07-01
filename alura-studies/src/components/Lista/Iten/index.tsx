import style from '../Lista.module.scss';
import React from 'react';


export default function Iten(props: { tarefa: string, tempo: string }) {
    return(
    <li className={style.item} >
        <h3 >{props.tarefa}</h3>
        <span>{props.tempo}</span>
    </li>
    )
}