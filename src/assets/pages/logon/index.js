import React, {useState} from 'react';
import {FiUserPlus, FiHome} from 'react-icons/fi'
import '../logon/styles.css'
import {Link, useHistory} from 'react-router-dom'
import api from '../../../services/api';


export default function Logon(){
  const history = useHistory();
  const status =localStorage.getItem('status')  
  const [Email, setEmail] = useState('')
  const [Key, setKey] = useState('')
  if(status!=="Logado"){
    async function handleLogin (e){
        e.preventDefault();
  
        try{
            const response = await api.post('session', { Email })
        
            localStorage.setItem('Email', Email);
            localStorage.setItem('Name', response.data.Name);
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('status', "Logado")
            
            history.push('/profiles');   
        } catch(err){ 
            alert('Falha no Login, Tente Novamenteeeeeeeeeeee')
        }
    }
  
      return(
          <div class="bg-light" >
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
              <div class="container"> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar12"> <Link class="navbar-brand d-none d-md-block" to="#">
                    <i class="fa d-inline fa-lg fa-circle"></i>
                    <b> LABINF</b>
                  </Link>
                  <ul class="navbar-nav mx-auto">
                  <li class="nav-item"> <Link class="nav-link" to="#">Download</Link> </li>
                    <li class="nav-item"> <Link to="/"> <FiHome class="fihome"/></Link> </li>
                    <li class="nav-item"> <Link class="nav-link" to="#">Contato</Link> </li>
                  </ul>
                  <ul class="navbar-nav">
                    
                    <li class="nav-item"> <Link class="nav-link text-primary" to="/register"><FiUserPlus/>Registrar</Link> </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="py-5">
              <div class="container">
                <div class="row">
                  <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
                    <h2>Login</h2>
                    <p class="lead">Entre para gerenciar projetos e eventos</p>
                    <div class="mx-auto col-md-12 col-10  p-5">
                   
                   
                   
                      <form onSubmit={handleLogin}>
                        <div class="form-group">
                             <input type="email"
                             value={Email}
                             onChange={e => setEmail (e.target.value)} 
                             class="form-control" 
                             placeholder="Email" 
                             id="form9"/> 
                      </div>
  
                        <div class="form-group mb-3"> 
                        <input 
                        type="password"
                        value={Key}
                        onChange={e => setKey (e.target.value)} 
                        class="form-control" 
                        placeholder="Password" 
                        id="form10"/>
                        
                         <small class="form-text text-muted text-right">
                            <Link to="/register">Cadastrar</Link>
                          </small> </div> 
                          <button type="submit" class="btn btn-primary">Entrar</button>
                      </form>
  
  
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-5 text-muted text-center">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 my-4">
                    <p class="mb-1">© 2020 - Laboratório de Informática Campus Paragominas</p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <Link to="#">Política</Link>
                      </li>
                      <li class="list-inline-item">
                        <Link to="#">Termos</Link>
                      </li>
                      <li class="list-inline-item">
                        <Link to="#">Contato</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <script src="assets/js/validation.js"></script>
          </div>
      )
  }else{  
    history.push('/profiles')
    return null;
    }
  }

