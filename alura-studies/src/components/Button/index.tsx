import React from 'react';
import style from './Button.module.scss'

//class Button extends React.Component<{children:any}>{
export default function Button (props: {children: any}){
   //render() {     
        return (
            
                <button className={style.botao}>
                    {props.children}
                </button>
            
        )
        //}
}

//export default Button;

