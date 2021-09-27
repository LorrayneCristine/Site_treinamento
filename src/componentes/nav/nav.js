import React from 'react'
import logo from '../../assets/nav/img/logo.png';



import './nav.css';

function Nav(){
    return( 

        <header className ="inicio">
                <a href="/"><img src={logo} alt="Foto" /></a>
            <nav>
                <a href="/">HOME</a>
                <a href="/#contato">CONTATO</a>
                <a href="/galeria">TÓPICOS</a>
                <a href="/curiosidades">CURIOSIDADES</a>
            </nav>
        </header>
    );
}
export default Nav;