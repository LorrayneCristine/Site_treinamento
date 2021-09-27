import React from 'react'

import poeira from '../../assets/curiosidades/img/poeira.jpg';
import lua from '../../assets/curiosidades/img/lua.jpg';

import Nav from '../../componentes/nav/nav'
import Footer from '../../componentes/footer/footer'
import Botao from '../../componentes/botao/botao'

import './curiosidades.css';


function Curiosidades(){
    return( 
            <main id="curiosidades">
                 <Nav/>
                <div className="titulo">
                    <h1> CURIOSIDADES </h1>
                </div>  

                <div className="tentativa1">

                    <h3> Somos feitos de poeira estelar?</h3>
                    <div class="curiosidade1">
                        <p>
                            Uma pesquisa comprovou o que Carl Sagan já falava há tempos: os humanos realmente são feitos de poeira de estrela. Depois de analisar 1500 estrelas, astrônomos chegaram à conclusão de que tanto os seres humanos quanto os astros brilhantes possuem 97% do mesmo tipo de átomos.
                            Constataram ainda que os elementos essenciais para a vida como a conhecemos (hidrogênio, nitrogênio, oxigênio, fósforo e enxofre) são mais prevalecentes nas estrelas que estão no centro da galáxia. 
                        </p>
                        <img src={poeira} alt="Foto" />
                    </div>

                    <h3>De onde surgiu a Lua?</h3>

                    <div class="curiosidade1">
                        <p>
                            A teoria mais aceita é que ela tenha surgido durante a formação dos planetas do Sistema Solar, quando um objeto do tamanho de Marte colidiu com o que seria a futura Terra e arrancou um pedaço dela.
                            “Os destroços começaram a girar em torno da Terra devido à gravidade e foram se juntando até formar o que hoje conhecemos por Lua. Isto explica porque a Lua tem a mesma composição rochosa da Terra e está cheia de crateras”
                        </p>
                        <img src={lua} alt="Foto" />
                    </div>

                </div> 
                <Footer/>
                <a href = "#curiosidades"> <Botao/> </a> 

            </main> 
);
    }
    export default Curiosidades;

