import React from 'react';
import './App.css';

import Informacoes from './pages/informacoes/informacoes.js'
import Galeria from './pages/galeria/galeria.js'
import Curiosidades from './pages/curiosidades/curiosidades.js'
import Home from './pages/home/index'

import{
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

export default function Routes (){
  return(
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/#contato" exact component = {Home}/>
        <Route path = "/galeria" exact component = {Galeria}/>
        <Route path = "/informacoes" exact component = {Informacoes}/>
        <Route path = "/curiosidades" exact component = {Curiosidades}/>
      </Switch>
    </BrowserRouter>
  )
}




