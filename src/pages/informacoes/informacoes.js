import React from 'react'
import supernova from '../../assets/informacoes/img/supernova.jpg';
import supernova1 from '../../assets/informacoes/img/supernova1.jpg';
import supernova3 from '../../assets/informacoes/img/supernova3.jpg';
import supernova4 from '../../assets/informacoes/img/supernova4.jpg';

import Nav from '../../componentes/nav/nav'
import Footer from '../../componentes/footer/footer'
import Botao from '../../componentes/botao/botao'



import './informacoes.css';



function Informacoes(){
    return( 
         <main id="informacoes">
                <Nav/>
                <div className="titulo">
                    <h1> SUPERNOVAS </h1>
                </div>  

                <div className="conteudo">
                    <p>
                        Uma supernova ocorre quando o núcleo de uma estrela, por alguma razão, entra em colapso.  Esse colapso pode ocorrer de duas maneiras diferentes, tendo como resultado uma supernova.
                        <br/>
                        O primeiro tipo de supernova ocorre nos sistemas binários de estrelas. Estrelas binárias são duas estrelas que orbitam em um mesmo ponto. Quando uma das estrelas é uma anã branca, composta por carbono-oxigênio, esta rouba matéria de sua estrela companheira. Provavelmente, a anã branca acumula muita matéria. Possuir matéria em excesso faz com que a estrela exploda, resultando em uma supernova.
                        <br/>
                        O segundo tipo de supernova acontece no final da vida de uma única estrela. À medida que o combustível nuclear
                        da estrela vai se esgotando, parte de sua massa flui para o núcleo. Consequentemente, o núcleo vai 
                        ficando mais pesado e, em algum momento, o peso é tanto que a estrela não pode suportar sua própria 
                        força gravitacional. O núcleo entra em colapso, o que resulta na explosão gigante de uma supernova. 
                        <br/>
                        Uma supernova é um fenômeno visível, directamente a partir da explosão cataclísmica de uma estrela que leva à sua destruição e, 
                        portanto, a morte da estrela. É um evento cósmico. Esta explosão é acompanhada por aumentos maciços seu brilho, visto da Terra, 
                        que pode durar várias semanas e até meses. É visível à luz do dia e à noite pode ser tão brilhante como a lua e até mesmo dar uma sombra 
                        a objetos. A supernova aparece tantas vezes como uma nova estrela, daí o seu nome, nova. 
                        Supernovas são eventos raros na nossa Via Láctea, a cerca de 1-3 por século, contra a escala do universo que observamos todos os dias.
                        <br/>
                    </p>
                    <div>
                         <img className="nemem" src={supernova1} alt="Foto" />
                        <p>
                            A supernova mais famosa na história da astronomia. SN 1054 foi uma supernova cuja explosão foi visto da 
                            Terra a partir de 4 julho de 1054, agora chamada de Nebulosa do Caranguejo. Ele está localizado na constelação de Taurus em nossa galáxia.
                        </p>
                    </div>  
                </div>

                <h3>
                    Imagens de supernovas
                </h3>

                    <div className="imagens">
                        <ul>
                        <li><img src={supernova} alt="Foto"/> </li> 
                        <li><img src={supernova3} alt="Foto"/> </li> 
                        <li><img src={supernova4} alt="Foto"/> </li>                      
                        </ul>
                    </div>
                   
                <Footer/>
                <a href = "#informacoes"> <Botao/> </a> 


            </main>
 
    );
        }
        export default Informacoes;