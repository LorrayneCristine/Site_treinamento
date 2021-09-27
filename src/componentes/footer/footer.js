import React from 'react'
import twitter from '../../assets/footer/img/twitter.png';
import facebook from '../../assets/footer/img/facebook.png';
import instagram from '../../assets/footer/img/instagram.png';

import './footer.css';

function Footer(){
    return( 
         <div className="footer">
             <footer>
                <img src={twitter} alt="Foto" />
                <img src={facebook} alt="Foto" />
                <img src={instagram} alt="Foto" />
            </footer>
         </div>
    );
}
export default Footer;




