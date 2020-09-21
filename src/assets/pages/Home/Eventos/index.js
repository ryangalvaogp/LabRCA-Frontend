import React, { useState, useEffect } from 'react';
import { FiLogIn, FiHome, FiInstagram, FiFacebook, FiDownload, FiUserPlus, FiUser, FiLogOut } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../../services/api'
import Moment from 'moment'

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';






import './styles.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const list = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  content: {
    flexDirection: "column"
  }
}));



export default function Eventos() {
  const classes = useStyles();
  const listc = list();

  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);




  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleLogout() {
    localStorage.clear();
    history.push('/')

  }
  const nameLogin = localStorage.getItem('Name');
  const status = localStorage.getItem('status')
  const history = useHistory();


  const [Eventos, setEventos] = useState([]);
  const id = localStorage.getItem('id');

  useEffect(() => {
    api.get('/Eventos').then(response => {
      setEventos(response.data)
    }
    )
  }, [id]);




  if (status !== "Logado") {
    return (

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
                <li class="nav-item"> <Link to="/"> <FiHome class="fihome" /></Link> </li>
                <li class="nav-item"> <Link class="nav-link" to="#">Contato</Link> </li>
              </ul>
              <ul class="navbar-nav invisible">


                <li class="nav-item"> <Link class="nav-link" to="/login">Login <FiLogIn class="FiLogIn" /></Link> </li>
                <li class="nav-item"> <Link class="nav-link text-primary" to="/register"><FiUserPlus />  Registrar</Link></li>





              </ul>
            </div>
          </div>
        </nav>
        <div class="py-5" >
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1>Listar os Eventos abaixo</h1>
              </div>
            </div>





          </div>
          <div class="py-5"   >
            <div class="container">

              <div class="row" >{Eventos.map(Eventos => (
                <div class="col-md-4 py-3 ">



                  <Card className={classes.root}>
                    <CardActionArea onClick={handleClickOpen('body')}>
                      <CardMedia
                        className={classes.media}
                        image="https://gerenciador.fei.edu.br/Content/Arquivos/Template/junho2017/Themes/Resources/imagens/graduacao/robo.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent >
                        <Typography gutterBottom variant="h5" component="h2">
                          {Eventos.Titulo}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" style={{ whiteSpace: "normal", wordBreak: "break-word" }} component="p">
                          <div className={listc.root}>

                            <Grid container spacing={2}>
                              <Grid item xs={12} md={6}>

                                <div className={listc.demo}>
                                  <List dense={true}>
                                    <ListItem >
                                      <ListItemText>
                                        <strong style={{ color: "black" }} >*</strong> Local:
                    {Eventos.Local_do_evento}
                                      </ListItemText>

                                    </ListItem>
                                    <ListItem>
                                      <ListItemText>
                                        <strong style={{ color: "black" }} >*</strong> Data: {Moment(Eventos.Data_do_evento).format('DD/M/YYYY')}
                                      </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                      <ListItemText>
                                        <strong style={{ color: "black" }} >*</strong> Hora: {Eventos.Hora_do_evento}
                                      </ListItemText>
                                    </ListItem>

                                  </List>
                                </div>
                              </Grid>
                            </Grid>


                          </div>





                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      scroll={scroll}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                    >
                      <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                      <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText

                        >
                         
                          {Eventos.Descricao}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Fechar <fiX></fiX>
                        </Button>

                      </DialogActions>
                    </Dialog>


                    <CardActions>
                      <Button size="small" color="primary">
                        Compartilhar
                     </Button>
                      <Button size="small" onClick={handleClickOpen('body')} color="primary">
                        Ler mais
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
                <p> <a target="_blank" href="https://ifpa.edu.br" target="_blank"> Endereço do Campus, 100 <p>complemento, Brasil</p></a> </p>
                <p> <a href="tel:+55 91 984126548">+55 91 984126548</a> </p>
                <p class="mb-0"> <a target="_blank" href="mailto:emaildoProjeto.com">emaildoProjeto@gmail.com</a> </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex align-items-center justify-content-center my-3"> <a target="_blank" href="#">
                <FiFacebook class="d-block fa fa-facebook-official text-muted fa-lg mr-2" />
              </a> <a target="_blank" href="#">
                  <FiInstagram class="d-block fa fa-instagram text-muted fa-lg mx-2" />
                </a> <a target="_blank" href="#">
                  <FiDownload class="d-block fa fa-google-plus-official text-muted fa-lg mx-2" />
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
  } else {
    return (

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
                <li class="nav-item"> <Link to="/"> <FiHome class="fihome" /></Link> </li>
                <li class="nav-item"> <Link class="nav-link" to="#">Contato</Link> </li>
              </ul>
              <ul class="navbar-nav ">


                <li class="nav-item"> <Link class="nav-link" to="/profiles"><FiUser color="Green" /> {nameLogin}</Link> </li>
                <li class="nav-item"> <Link class="nav-link" onClick={handleLogout} to="#">Logout <FiLogOut color="Red" /></Link> </li>





              </ul>
            </div>
          </div>
        </nav>
        <div class="py-5" >
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1>Listar os Eventos abaixo</h1>
              </div>
            </div>





          </div>
          <div class="py-5"   >
            <div class="container">

              <div class="row" >{Eventos.map(Eventos => (
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
                          {Eventos.Titulo} <small style={{ fontSize: "50%" }}>{Moment(Eventos.Data_de_criacao).format('DD/M/YYYY')}</small>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" style={{ whiteSpace: "normal", wordBreak: "break-word" }} component="p">
                          {Eventos.Descricao}
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
                <p> <a target="_blank" href="https://ifpa.edu.br" target="_blank"> Endereço do Campus, 100 <p>complemento, Brasil</p></a> </p>
                <p> <a href="tel:+55 91 984126548">+55 91 984126548</a> </p>
                <p class="mb-0"> <a target="_blank" href="mailto:emaildoProjeto.com">emaildoProjeto@gmail.com</a> </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex align-items-center justify-content-center my-3"> <a target="_blank" href="#">
                <FiFacebook class="d-block fa fa-facebook-official text-muted fa-lg mr-2" />
              </a> <a target="_blank" href="#">
                  <FiInstagram class="d-block fa fa-instagram text-muted fa-lg mx-2" />
                </a> <a target="_blank" href="#">
                  <FiDownload class="d-block fa fa-google-plus-official text-muted fa-lg mx-2" />
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