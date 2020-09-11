import React, {useState} from 'react';
import {FiLogIn, FiHome} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import '../Registrar/styles.css'
import api from '../../../services/api'




export default function Registrar (){
    
  

    const history = useHistory();
    const status = localStorage.getItem('status')
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [funcao, setFuncao] = useState('');

    async function handleCadastrar(e){
      e.preventDefault();
      try{
        const response = await api.post('users', {id, name, email, celular, funcao})    
        alert(response.data.Status)
        history.push('/login')
    } catch(err){ 
        alert('Falha no Cadastro, Tente Novamente')
        }         
    }
    if (status !== "Logado"){
    return (            
<body class="bg-light">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container"> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12">
        <span class="navbar-toggler-icon">
            
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbar12">
          <Link class="navbar-brand d-none d-md-block" to="#">
          <i class="fa d-inline fa-lg fa-circle"></i>
          <b color="Green"> LABINF</b>
        </Link>
        <ul class="navbar-nav mx-auto">
                    <li class="nav-item"> <Link class="nav-link" to="#">Download</Link> </li>
                    <li class="nav-item"> <Link to="/"> <FiHome class="fihome"/></Link> </li>
                    <li class="nav-item"> <Link class="nav-link" to="#">Contato</Link> </li>
        </ul>
        <ul class="navbar-nav">
        
          <li class="nav-item"> <Link class="nav-link"  to="/login">Login <FiLogIn class="FiLogIn"/></Link> </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="py-5 text-center">
    <div class="container">
      <div class="row" >
        <div class="mx-auto col-lg-6 col-10">
          <h1>Registrar</h1>
          <form onSubmit={handleCadastrar} class="text-left">
          <div class="form-group"> 
            <label for="form16">Matrícula</label> 
            <input  
            type="number" 
            class="form-control" 
            id="form16" 
            placeholder="Seu Número de Matrícula"
            value={id}
            onChange={e=>setId(e.target.value)}
            />
            </div>
            <div class="form-group"> 
            <label for="form16">Nome</label> 
            <input type="text" 
            class="form-control" 
            id="form17" 
            placeholder="Seu Nome"
            value={name}
            onChange={e=>setName(e.target.value)}
            />
            </div>
            
            <div class="form-group"> 
            <label for="form18">E-mail</label> 
            <input type="email" 
            class="form-control" 
            id="form17" 
            placeholder="Seu E-mail"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            /> 
            </div>

            <div class="form-group"> 
            <label for="form19">Celular</label> 
            <input type="number" 
            class="form-control" 
            id="form17" 
            placeholder="Seu Celular"
            value={celular}
            onChange={e=>setCelular(e.target.value)}
            /> 
            </div>

                <div class="form-group">
                <label for="form20">Função</label> 
                <select class="form-control" 
                placeholder="Função"
                value={funcao}
                onChange={e=>setFuncao(e.target.value)}
                 >
                    <option  selected value="Aluno"
                    >Aluno
                    </option>
                    
                    <option value="Professor/Orientador"
                    >Professor/Orientador
                    </option>
                                                      
                 </select>
          </div>
            <div class="form-row">
              <div class="form-group col-md-6"> 
                    <label for="form21">Senha</label> 
                    <input type="password" class="form-control" id="form19" placeholder="••••"/> </div>
              <div class="form-group col-md-6"> 
                    <label for="form22">Confirmar Senha</label> 
                    <input type="password" class="form-control" id="form20" placeholder="••••"/> </div>
            </div>
            <div class="form-group">
              <div class="form-check"> <input class="form-check-input" type="checkbox" id="form23" value="on"/> <label class="form-check-label" for="form24"> Eu Concordo com os&nbsp;<Link to="#">Termos e as Condições</Link>&nbsp;para o cadastro</label> </div>
            </div><button type="submit" class="btn btn-primary">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="py-5 text-muted text-center" >
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
 
 
</body>
    );
    }else{history.push('/profiles')
        return null;
        
    }
        
    
            
}