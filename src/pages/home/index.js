import React from 'react'
import './home.css';
import Slider from '../../componentes/slider/slider.js'
import Nav from '../../componentes/nav/nav'
import Footer from '../../componentes/footer/footer'
import Botao from '../../componentes/botao/botao'

    function Home(){
    return(

       <main id="homezinho">
           <Nav/>
            <section className="background">
                    <h2> APOLO</h2>
                    <button class="botao"> <a href="/galeria" >TÓPICOS</a></button>
            </section>
    
            <section>
                 {/*titulo*/}
                <h1>NOSSA MISSÃO</h1>
                <p>
                    "Há uma teoria que indica que sempre que qualquer um descobrir exatamente o que, para que e porque o universo está aqui, o mesmo desaparecerá e será substituído imediatamente por algo ainda mais bizarro e inexplicável ..." 
                    <br></br>
                    Não entre em pânico! Isso é apenas um trecho do Guia do Mochileiro das Galáxias. Todavia, nosso verdadeiro plano é difundir informações e princípios com relação a astronomia e astrofísica, afim de explicar e conhecer o universo que nos cerca. 
                    <br></br><br></br>
                    Não esqueça a toalha e que a força esteja com você! 
                </p>
            </section>

                <Slider/>

                {/*contato*/}
            <section>
                <h2>Enviar imagem e temas</h2>
                <section id="contato">
                    <form>
                        <label> Nome </label>
                        <input type="text" name="Nome"/>
                        <label> Descrição</label>
                        <input type="text" name="Descricao"/>
                        <label> Upload</label>
                        <input type="text" name="Upload"/>
                        <label> Tipo</label>
                        <input type="text" name="Tipo"/>
                        <br></br>
                        <button>
                            Enviar
                        </button>
                    </form>
                </section>
            </section>
            <Footer/>
            <a href = "#homezinho"> <Botao/> </a> 
        </main>
    );
}
export default Home;


