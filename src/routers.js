import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/index'
import Informacoes from './pages/informacoes/informacoes.js'
import Galeria from './pages/galeria/galeria.js'
import Curiosidades from './pages/curiosidades/curiosidades.js'

function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/" component={Galeria}/>
                <Route path="/" component={Informacoes}/>
                <Route path="/" component={Curiosidades}/>
            </Switch>
        </BrowserRouter>
    );

};
export default Route;