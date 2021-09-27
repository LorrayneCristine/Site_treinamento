
import React from 'react'
import Nav from '../nav/nav';
import botao from '../../assets/botao/img/botao.png';
import './botao.css';


function Botao(){
    return( 
         <div className="btn">
           <img src={botao} className="imgbotao" alt="botao"/>
        </div>
);
}
export default Botao;