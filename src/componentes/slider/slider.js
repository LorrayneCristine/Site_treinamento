import React from 'react'
import netuno1 from '../../assets/slider/img/netuno1.jpg';
import netuno2 from '../../assets/slider/img/netuno2.jpg';
import netuno3 from '../../assets/slider/img/netuno3.jpg';

import urano1 from '../../assets/slider/img/urano1.jpg';
import urano2 from '../../assets/slider/img/urano2.jpg';
import urano3 from '../../assets/slider/img/urano3.jpg';

import saturno1 from '../../assets/slider/img/saturno1.jpg';
import saturno2 from '../../assets/slider/img/saturno2.jpg';
import saturno3 from '../../assets/slider/img/saturno3.jpg';

import jupiter1 from '../../assets/slider/img/jupiter1.jpg';
import jupiter2 from '../../assets/slider/img/jupiter2.jpg';
import jupiter3 from '../../assets/slider/img/jupiter3.jpg';

import marte1 from '../../assets/slider/img/marte1.jpg';
import marte3 from '../../assets/slider/img/marte3.jpg';
import marte2 from '../../assets/slider/img/marte2.jpg';

import terra1 from '../../assets/slider/img/terra1.jpg';
import terra2 from '../../assets/slider/img/terra2.jpg';
import terra3 from '../../assets/slider/img/terra3.jpg';

import venus1 from '../../assets/slider/img/venus1.jpg';
import venus2 from '../../assets/slider/img/venus2.jpg';
import venus3 from '../../assets/slider/img/venus3.jpg';

import mercurio1 from '../../assets/slider/img/mercurio1.jpg';
import mercurio2 from '../../assets/slider/img/mercurio2.jpg';
import mercurio3 from '../../assets/slider/img/mercurio3.jpg';

import './slider.css';


function Slider(){
    return( 
        <section id="banana">
            <div>
                <img className="foto" src={netuno1} alt="Foto" />
                <img className="foto" src={netuno2} alt="Foto" />
                <img className="foto" src={netuno3} alt="Foto" />
            </div>
            <div>
                <img className="foto" src={urano2} alt="Foto" />
                <img className="foto" src={urano3} alt="Foto" />
                <img className="foto" src={urano1} alt="Foto" />
            </div>
            <div>
                <img className="foto" src={saturno1} alt="Foto" />
                <img className="foto" src={saturno2} alt="Foto" />
                <img className="foto" src={saturno3} alt="Foto" />
            </div>
            <div>
                <img className="foto" src={jupiter1} alt="Foto" />
                <img className="foto" src={jupiter2} alt="Foto" />
                <img className="foto" src={jupiter3} alt="Foto" />
            </div>
            <div>
                <img className="foto" src={marte1} alt="Foto" />
                <img className="foto" src={marte2} alt="Foto" />
                <img className="foto" src={marte3} alt="Foto" />
            </div>
            <div>
                <img className="foto" src={terra3} alt="Foto" />
                <img className="foto" src={terra2} alt="Foto" />
                <img className="foto" src={terra1} alt="Foto" />
            </div>
            <div>
                <img className="foto" src={venus3} alt="Foto" />
                <img className="foto" src={venus2} alt="Foto" />
                <img className="foto" src={venus1} alt="Foto" />
            </div>
            <div>
                <img className="foto" src={mercurio1} alt="Foto" />
                <img className="foto" src={mercurio2} alt="Foto" />
                <img className="foto" src={mercurio3} alt="Foto" />
            </div>
           
         </section>
     );
    }
    export default Slider;