import React, {useState, useEffect} from 'react';
import {FiLogIn, FiHome, FiInstagram, FiFacebook, FiDownload, FiUserPlus, FiUser, FiLogOut} from 'react-icons/fi';
import {Link, useHistory } from 'react-router-dom';
import api from '../../../../services/api'
import Moment from 'moment'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';




import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';










import './styles.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function Projetos(){
  const classes = useStyles();
  
  const [expanded, setExpanded] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleLogout(){
    localStorage.clear();
    history.push('/')

}
const nameLogin = localStorage.getItem('Name');
  const status = localStorage.getItem('status')
    const history=useHistory();


    const [Projetos, setProjetos] = useState([]);
        const id= localStorage.getItem('id');
        
        useEffect(() => {
            api.get('/projetos').then(response => {
                                            setProjetos(response.data)
}
                           )
        },[id]);
        


  
    if (status !=="Logado"){
        return(
        
            <body>
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
                              <ul class="navbar-nav invisible">
                                
                              
                              <li class="nav-item"> <Link class="nav-link"  to="/login">Login <FiLogIn class="FiLogIn"/></Link> </li>
                <li class="nav-item"> <Link class="nav-link text-primary" to="/register"><FiUserPlus/>  Registrar</Link></li>

                             
                             
                              
                              
                              </ul>
                            </div>
                          </div>
                        </nav>
                        <div class="py-5" >
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>Listar os projetos abaixo</h1>
        </div>
      </div>


          

      
    </div>
<div  class="py-5"   >
    <div class="container">
      
          <div class="row" >{Projetos.map(Projetos=>(
            <div class="col-md-4 py-3 ">
            
             

             <Card className={classes.root}>
                   <CardActionArea>
                     <CardMedia
                       className={classes.media}
                       image="https://gerenciador.fei.edu.br/Content/Arquivos/Template/junho2017/Themes/Resources/imagens/graduacao/robo.jpg"
                       title="Contemplative Reptile"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="h2">
                         {Projetos.Titulo} <small style={{fontSize:"50%"}}>{Moment( Projetos.Data_de_criacao).format('DD/M/YYYY')}</small>
                       </Typography>
                       <Typography variant="body2" color="textSecondary" style={{whiteSpace:"normal", wordBreak:"break-word"}} component="p">
                         {Projetos.Descricao}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                   <CardActions>
                     <Button size="small" color="primary">
                       Share
                     </Button>
                     <Button size="small" color="primary">
                       Learn More
                     </Button>
                   </CardActions>
                 </Card>
             
             
                
                      
                      
                   
                      
                 
                         

            </div>
 ))}
          </div>



     
          </div>
    
            
            
    
        
            
          </div>
  </div>
  <div class="py-3">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center"> <i class="d-block fa fa-stop-circle mb-3 text-muted fa-3x"></i>
                      <p> <a  target="_blank"  href="https://ifpa.edu.br" target="_blank"> Endereço do Campus, 100 <p>complemento, Brasil</p></a> </p>
                      <p> <a    href="tel:+55 91 984126548">+55 91 984126548</a> </p>
                      <p class="mb-0"> <a  target="_blank"  href="mailto:emaildoProjeto.com">emaildoProjeto@gmail.com</a> </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex align-items-center justify-content-center my-3"> <a  target="_blank"  href="#">
                        <FiFacebook class="d-block fa fa-facebook-official text-muted fa-lg mr-2"/>
                      </a> <a  target="_blank"  href="#">
                        <FiInstagram class="d-block fa fa-instagram text-muted fa-lg mx-2"/>
                      </a> <a  target="_blank"  href="#">
                        <FiDownload class="d-block fa fa-google-plus-official text-muted fa-lg mx-2"/>
                      </a> </div>
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
                          <ul class="navbar-nav ">
                            
                          
                          <li class="nav-item"> <Link class="nav-link" to="/profiles"><FiUser color="Green"/> {nameLogin}</Link> </li>
              <li class="nav-item"> <Link class="nav-link" onClick={handleLogout} to="#">Logout <FiLogOut color="Red"/></Link> </li>

                         
                         
                          
                          
                          </ul>
                        </div>
                      </div>
                    </nav>
                    <div class="py-5" >
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h1>Listar os projetos abaixo</h1>
    </div>
  </div>


      

  
</div>
<div  class="py-5"   >
<div class="container">
  
      <div class="row" >{Projetos.map(Projetos=>(
        <div class="col-md-4 py-3 ">
        
         

         <Card className={classes.root}>
               <CardActionArea>
                 <CardMedia
                   className={classes.media}
                   image="https://gerenciador.fei.edu.br/Content/Arquivos/Template/junho2017/Themes/Resources/imagens/graduacao/robo.jpg"
                   title="Contemplative Reptile"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     {Projetos.Titulo} <small style={{fontSize:"50%"}}>{Moment( Projetos.Data_de_criacao).format('DD/M/YYYY')}</small>
                   </Typography>
                   <Typography variant="body2" color="textSecondary" style={{whiteSpace:"normal", wordBreak:"break-word"}} component="p">
                     {Projetos.Descricao}
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <Button size="small" color="primary">
                   Share
                 </Button>
                 <Button size="small" color="primary">
                   Learn More
                 </Button>
               </CardActions>
             </Card>
         
         
            
                  
                  
               
                  
             
                     

        </div>
))}
      </div>



 
      </div>

        
        

    
        
      </div>
</div>
<div class="py-3">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center"> <i class="d-block fa fa-stop-circle mb-3 text-muted fa-3x"></i>
                  <p> <a  target="_blank"  href="https://ifpa.edu.br" target="_blank"> Endereço do Campus, 100 <p>complemento, Brasil</p></a> </p>
                  <p> <a    href="tel:+55 91 984126548">+55 91 984126548</a> </p>
                  <p class="mb-0"> <a  target="_blank"  href="mailto:emaildoProjeto.com">emaildoProjeto@gmail.com</a> </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 d-flex align-items-center justify-content-center my-3"> <a  target="_blank"  href="#">
                    <FiFacebook class="d-block fa fa-facebook-official text-muted fa-lg mr-2"/>
                  </a> <a  target="_blank"  href="#">
                    <FiInstagram class="d-block fa fa-instagram text-muted fa-lg mx-2"/>
                  </a> <a  target="_blank"  href="#">
                    <FiDownload class="d-block fa fa-google-plus-official text-muted fa-lg mx-2"/>
                  </a> </div>
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