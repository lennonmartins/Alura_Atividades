import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={
                style.novaTarefa
            }>
               <div className ={
                style.inputContainer
               }>
                    <label htmlFor="tarefa">Adiciona uma tarefa:</label>
                    <input type="text" 
                    id="tarefa" 
                    name="tarefa"
                    placeholder='O que você quer estudar?'
                    required/>
                </div> 
                <div className={
                    style.inputContainer
                }>
                    <label htmlFor="tempo">Tempo de estudo:</label>
                    <input type="time" 
                    id="tempo"
                    step="1"
                    name="tempo"
                    max="01:30:00"
                    min= "00:00:00"
                    required
                     />
                </div>
                <Button>
                    Adicionar
                </Button>
            </form>
        )
    }

}

export default Form;