import React from 'react'

import supernova from '../../assets/galeria/img/supernova.jpg';
import estreladeneutrons from '../../assets/galeria/img/estreladeneutrons.jpg';
import saturnogaleria from '../../assets/galeria/img/saturnogaleria.jpg';
import vialactea from '../../assets/galeria/img/vialactea.png';
import nebulosa from '../../assets/galeria/img/nebulosas.jpg';
import doppler from '../../assets/galeria/img/doppler.jpg';

import Nav from '../../componentes/nav/nav'
import Footer from '../../componentes/footer/footer'
import Informacoes from '../informacoes/informacoes'
import Botao from '../../componentes/botao/botao'



import './galeria.css';

function Galeria(){
    return( 
         <section id="galeria">
                <Nav/>

                <div className="titulo">
                    <h1> TÓPICOS</h1>
                    <h3> Temas relacionados a astronomia</h3>
                </div>  

                <ul className="guias">
                    <li>    
                    <a href= "Informacoes">< img className="vermelho" src={supernova} alt="vermelho"/></a>
                        <div className="descricao">
                            Supernovas
                        </div>
                    </li>
                    <li>
                    <a href= "Informacoes">< img className="vermelho" src={estreladeneutrons} alt="vermelho"/></a>
                        <div className="descricao">
                            Estrelas de Nêutron
                        </div>        
                    </li>
                    <li >
                         <a href= "Informacoes">< img className="vermelho" src={saturnogaleria} alt="vermelho"/></a>
                        <div className="descricao">
                            Aneis de Saturno
                        </div>
                    </li>
                    <li >
                         <a href= "Informacoes">< img className="vermelho" src={vialactea} alt="vermelho"/></a>
                        <div class="descricao">
                            Via Láctea
                        </div>
                    </li>
                    <li >
                        <a href= "Informacoes"><img className="vermelho" src={nebulosa} alt="vermelho" /></a>
                        <div class="descricao">
                            Nebulosas
                        </div>
                    </li>
                    <li >
                        <a href= "Informacoes"><img className="vermelho" src={doppler} alt="vermelho" /></a>
                        <div class="descricao">
                            Efeito doppler
                        </div>
                    </li>
                </ul>
                <Footer/>
                <a href = "#galeria"> <Botao/> </a> 


         </section>
 
);
    }
    export default Galeria;