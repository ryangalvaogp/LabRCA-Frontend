import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'

import Logon from './assets/pages/logon'
import Home from '../src/assets/pages/Home/index.js'
import Profiles from './assets/pages/profiles'
import Registrar from './assets/pages/Registrar'
import Projetos from './assets/pages/Home/Projetos'
import Eventos from './assets/pages/Home/Eventos/index'
  //          <Route path='/Eventos' component={}/>

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path='/projetos' component={Projetos}/>            
            <Route path="/login" exact component={Logon}/>
            <Route path="/profiles" component={Profiles}/>
            <Route path="/register" component={Registrar}/>
            <Route path='/Eventos' component={Eventos}/>
        </Switch>
        </BrowserRouter>
    )
}













