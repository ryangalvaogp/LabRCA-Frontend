import React from 'react';
import {FiLogIn, FiLogOut, FiUser, FiHome, FiInstagram, FiFacebook, FiDownload, FiUserPlus} from 'react-icons/fi';
import {Link, useHistory } from 'react-router-dom';



import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './styles.css'



import {Carousel} from 'react-bootstrap'

//import '../logon/styles.css'
export default function Homes (){

 





  const [anchorEl, setAnchorEl] = React.useState(null);
    const nameLogin = localStorage.getItem('Name');
    const status = localStorage.getItem('status')
   
    const history = useHistory();
    function handleLogout(){
        localStorage.clear();
        history.push('/')

    }
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      
    };
  
    const handleClose = () => {
      setAnchorEl(null);
     
    };
    function registrar(){
      history.push('/register')
    }
    function login(){
      history.push('/login')
    }
   
    if (status !=="Logado"){
      
      



        return(
        
          <body class="bg-light">
          <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container"> 
                          <button class="navbar-toggler navbar-toggler-LEFT border-0" type="button" data-toggle="collapse" data-target="#navbar12">  
                          <span class="navbar-toggler-icon " aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                            </button>
                            <Menu data-toggle="collapse" data-target=".navbar-collapse" 
                                  id="simple-menu"
                                  anchorEl={anchorEl}
                                  keepMounted
                                  open={Boolean(anchorEl)}
                                  onClose={handleClose}
                                >
                                  <MenuItem  onClick={login}> <FiLogIn color="Green"/>  Login</MenuItem>
                                  <MenuItem onClick={registrar}> <FiUserPlus color="blue"/>  Registrar</MenuItem>
                                  <MenuItem onClick={handleClose}> <FiLogIn color="Green"/></MenuItem>
                                </Menu>
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
                                
                              
                              <li class="nav-item"> <Link class="nav-link"  to="/login">Login <FiLogIn class="FiLogIn"/></Link> </li>
                <li class="nav-item"> <Link class="nav-link text-primary" to="/register"><FiUserPlus/>  Registrar</Link></li>

               
                             
                              
                              
                              </ul>
                            </div>
                          </div>
                        </nav>
              <div id="i" class="py-5 text-center text-white min-vh-100 align-items-center d-flex i ">
                <div class="container py-5">
                  <div class="row">
                    <div class="mx-auto col-lg-11 col-md-10" >
                      <h1 class="mb-4 display-3" >Laboratório de Robótica e Computação Aplicada</h1>
                      <h1 class="mb-4 display-4" >IFPA - Campus Paragominas</h1>
                     <Link  to="#P" class="btn btn-lg btn-primary mx-1"> Veja mais</Link> 
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-5 text-center   ">
                <div class="container">
                  <div class="row">
                    <div class="mx-auto col-lg-10">
                      <div class="row">
                        <div class="col-md-6 px-5 mt-3"> <i class="d-block fa fa-stop-circle fa-4x mb-3 text-muted"></i>
                          <h4>Visualizar Projetos</h4>
                          <p class="mb-3">Os projetos do laborátio são responsáveis por integrar os alunos de informática do campus, Link atividade de pesquisa tecnológica, desenvolvida nos âmbitos do Campus.</p> 
                          <Link class="btn btn-outline-primary" to="/projetos">Projetos</Link>
                        </div>
                        <div class="col-md-6 px-5 mt-3">
                          <i class="d-block fa fa-stop-circle-o fa-4x mb-3 text-muted"></i>
                          <h4>Visualizar Eventos</h4>
                          <p class="mb-3">Os eventos fazem parte do calendário institucional
                           e acadêmico, visando Link promoção destes afim de apresentar
                            trabalhos, projetos e incentivar Link inclusão tecnológica.&nbsp;
                            </p> <Link class="btn btn-outline-primary" to="/eventos">Eventos</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<div class="container">
<div class="row ">

<div class="mx-auto col-lg-11">

<Carousel 
id="P" 
class="container VH-100"
fade="true"
keyboard
pause="hover"
interval="6000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cronos-media.sesisenaisp.org.br//api/media/1-0/files?img=img_65_180122_0d560bb7-79b9-499d-a8be-eebacb130705_o.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s2.glbimg.com/CbYiBI65JJTi6fV2MXQCjUoZoPM=/0x0:1000x667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/k/6/xBFRblQaaM6xXZKv6C5g/foto-15-rob-otica-foto-jefferson-peixoto-coperphoto-sistema-fieb-3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://codigofonte.com.br/wp-content/uploads/2018/08/source-code.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>

</div>

</div>

              



              <div class="py-3  vh-25 " >
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center"> <i class="d-block fa fa-stop-circle mb-3 text-muted fa-3x"></i>
                      <p> <Link to="https://goo.gl/maps/AUq7b9W7yYJ2" target="_blank"> Fake street, 100 <p>NYC - 20179, USA</p></Link> </p>
                      <p> <Link to="tel:+246 - 542 550 5462">+1 - 256 845 87 86</Link> </p>
                      <p class="mb-0"> <Link to="mailto:info@pingendo.com">info@pingendo.com</Link> </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex align-items-center justify-content-center my-3"> <Link to="#">
                        <FiFacebook class="d-block fa fa-facebook-official text-muted fa-lg mr-2"/>
                      </Link> <Link to="#">
                        <FiInstagram class="d-block fa fa-instagram text-muted fa-lg mx-2"/>
                      </Link> <Link to="#">
                        <FiDownload class="d-block fa fa-google-plus-official text-muted fa-lg mx-2"/>
                      </Link> </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <p class="mb-0">© 2020 - Laboratório de Informática Campus Paragominas</p>
                    </div>
                  </div>
                </div>
              </div>
              </body>
                )
    }else{
        return(
        
            <body>
            <nav  class="navbar navbar-expand-md navbar-dark bg-dark">
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
                                
                              
                <li class="nav-item"> <Link class="nav-link" to="/profiles"><FiUser color="Green"/> {nameLogin}</Link> </li>
              <li class="nav-item"> <Link class="nav-link" onClick={handleLogout} to="#">Logout <FiLogOut color="Red"/></Link> </li>
                             
                             
                              
                              
                              </ul>
                            </div>
                          </div>
                        </nav>
              <div id="i" class="py-5 text-center text-white vh-100 align-items-center d-flex i">
                <div class="container py-5">
                  <div class="row">
                  <div class="mx-auto col-lg-11 col-md-10" >
                      <h1 class="mb-4 display-3" >Laboratório de Informática</h1>
                      <h1 class="mb-4 display-4" >IFPA - Campus Paragominas</h1>
                      <Link to="#" class="btn btn-lg btn-primary mx-1">Take me there</Link> <Link class="btn btn-lg btn-primary mx-1" to="#">Let's Go</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-5 text-center  vh-100 ">
                <div class="container">
                  <div class="row">
                    <div class="mx-auto col-lg-10">
                      <div class="row">
                        <div class="col-md-6 px-5 mt-3"> <i class="d-block fa fa-stop-circle fa-4x mb-3 text-muted"></i>
                          <h4>Visualizar Projetos</h4>
                          <p class="mb-3">Os projetos do laborátio são responsáveis por integrar os alunos de informática do campus, Link atividade de pesquisa tecnológica, desenvolvida nos âmbitos do Campus.</p> <Link class="btn btn-outline-primary" to="#">Projetos</Link>
                        </div>
                        <div class="col-md-6 px-5 mt-3">
                          <i class="d-block fa fa-stop-circle-o fa-4x mb-3 text-muted"></i>
                          <h4>Visualizar Eventos</h4>
                          <p class="mb-3">Os eventos fazem parte do calendário institucional
                           e acadêmico, visando Link promoção destes afim de apresentar
                            trabalhos, projetos e incentivar Link inclusão tecnológica.&nbsp;
                            </p> <Link class="btn btn-outline-primary" to="#">Eventos</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>






              <div class="py-3 vh-25">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center"> <i class="d-block fa fa-stop-circle mb-3 text-muted fa-3x"></i>
                      <p> <Link to="https://goo.gl/maps/AUq7b9W7yYJ2" target="_blank"> Fake street, 100 <p>NYC - 20179, USA</p></Link> </p>
                      <p> <Link to="tel:+246 - 542 550 5462">+1 - 256 845 87 86</Link> </p>
                      <p class="mb-0"> <Link to="mailto:info@pingendo.com">info@pingendo.com</Link> </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex align-items-center justify-content-center my-3"> <Link to="#">
                        <FiFacebook class="d-block fa fa-facebook-official text-muted fa-lg mr-2"/>
                      </Link> <Link to="#">
                        <FiInstagram class="d-block fa fa-instagram text-muted fa-lg mx-2"/>
                      </Link> <Link to="#">
                        <FiDownload class="d-block fa fa-google-plus-official text-muted fa-lg mx-2"/>
                      </Link> </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <p class="mb-0">© 2020 - Laboratório de Informática Campus Paragominas</p>
                    </div>
                  </div>
                </div>
              </div>
              </body>
                )

    }
    


}
