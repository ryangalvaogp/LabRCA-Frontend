import React, { useState, useEffect } from 'react';
import api from '../../../services/api'
import { Link, useHistory } from 'react-router-dom'
import { FiLogOut, FiUser, FiTrash2, FiHome, FiSettings } from 'react-icons/fi'
import moment from 'moment'

//Material UI
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';



//CSS's
import '../logon/styles.css'
import '../profiles/styles.css'
import '../../../global.css'





export default function Profiles() {
  const history = useHistory();
  const status = localStorage.getItem('status')
  const cpe = sessionStorage.getItem('cpe')

  const test = "Ryan"

  const [open, setOpen] = React.useState(false);
  const [openn, setOpenn] = React.useState(false);
  const [Projetos, setProjetos] = useState([]);
  const [Eventos, setEventos] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [Titulo, setTitulo] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [Data_de_criacao, setData_de_criacao] = useState(Date.now());
  const [Local_do_evento, setLocal_do_evento] = useState('Auditório IFPA');
  const [Data_do_evento, setData_do_evento] = useState(Date.now());
  const [Hora_do_evento, setHora_do_evento] = useState('');


  const nameLogin = localStorage.getItem('Name');
  //const emailLogin = localStorage.getItem('Email');
  const id = localStorage.getItem('id');
  //const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));


  //Funções para Atualizações      
  //Atualizar ao deletar Projetos
  useEffect(() => {
    api.get('users/projetos', {
      headers:
      {
        Authorization: id,
      }
    }
    ).then(response => {
      setProjetos(response.data)
    }
    )
  }, [id]);
  //Atualizar ao deletar Eventos
  useEffect(() => {
    api.get('users/eventos', {
      headers:
      {
        Authorization: id,
      }
    }
    ).then(response => {
      setEventos(response.data)
    }
    )
  }, [id]);

  //Atualizar ao Cadastrar Projetos
  useEffect(() => {
    api.get('users/projetos', {
      headers:
      {
        Authorization: id,
        cpe: cpe,
      }
    }
    ).then(response => {
      setProjetos(response.data)
    }
    )
    sessionStorage.clear();
  }, [cpe]);

  //Atualizar ao Cadastrar Eventos
  useEffect(() => {
    api.get('users/Eventos', {
      headers:
      {
        Authorization: id,
        cpe: cpe,
      }
    }
    ).then(response => {
      setEventos(response.data)
    }
    )
    sessionStorage.clear();
  }, [cpe]);


  if (status === "Logado") {
    // eslint-disable-next-line

    //Funções Para o SISTEMA
    //Cadastrar Projetos
    async function Cprojetos(e) {
      e.preventDefault();
      try {
        await api.post('Projetos', {
          Titulo,
          Descricao,
          Data_de_criacao
        },
          {
            headers:
            {
              Authorization: id,
            }
          }
        )
        sessionStorage.setItem('cpe', cpe + 1)

        history.push('/profiles')
      } catch (err) {
        alert('Falha no Cadastro, Tente Novamente')
      }
    }




    async function Ceventos(e) {


      e.preventDefault();


      try {
        await api.post('Eventos', {
          Titulo,
          Descricao,
          Local_do_evento,
          Data_do_evento,
          Hora_do_evento
        },
          {
            headers:
            {
              Authorization: id,
            }
          }
        )
        sessionStorage.setItem('cpe', cpe + 1)

        history.push('/profiles')
      } catch (err) {
        alert('Falha no Cadastro, Tente Novamente')
      }
    }












    async function handleDeleteProjetos(idP) {
      try {
        console.log(Projetos.id)
        await api.delete(`Projetos/${idP}`, {
          headers: {
            Authorization: id,
          }
        });

        setProjetos(Projetos.filter(Projetos => Projetos.id !== idP));

      } catch (err) {
        alert('Erro ao deletar caso, tente novamente.')
      }
    }
    async function handleDeleteEventos(idE) {

      try {
        console.log(Eventos.id)
        await api.delete(`Eventos/${idE}`, {
          headers: {
            Authorization: id,
          }
        });

        setEventos(Eventos.filter(Eventos => Eventos.id !== idE))
      } catch (err) {
        alert('Erro ao deletar o Evento')
      }
    }
    function handleLogout() {
      localStorage.clear();
      history.push('/')

    }

    //Funções para LAYOUT
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);

    };



    //POUP Formulario de Cadastro
    //Abrir POUP Projetos
    const handleClickOpen = () => {
      setOpen(true);
    };
    //Fechar POUP Projetos
    const handleClosee = () => {
      setOpen(false);
    };

    //Abrir POUP Eventos
    const handleClickOpenn = () => {
      setOpenn(true);
    };
    //Fechar POUP Eventos
    const handleCloseee = () => {
      setOpenn(false);
    };
    const handleDateChange = (date) => {
      setData_de_criacao(date);
    };
    const DefineDataE = (date) => {
      setData_do_evento(date)
    }
    //Funções para REDIRECIONAMENTO
    function config() {
      history.push('/settings')
    }

    return (

      <body class="bg-light">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="container"> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12">
            <span class="navbar-toggler-icon " aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >

                <MenuItem onClick={config}><FiSettings color="GREEN" />  Configurações </MenuItem>
                <MenuItem onClick={handleLogout}> <FiLogOut color="Red" />  Logout</MenuItem>
              </Menu>

            </span>
          </button>
            <div class="collapse navbar-collapse" id="navbar12">
              <Link class="navbar-brand d-none d-md-block" to="#">
                <i class="fa d-inline fa-lg fa-circle"></i>
                <b color="Green"> LABINF</b>
              </Link>
              <ul class="navbar-nav mx-auto">
                <li class="nav-item"> <Link class="nav-link" to="#">Download</Link> </li>
                <li class="nav-item"> <Link to="/"> <FiHome class="fihome" /></Link> </li>
                <li class="nav-item"> <Link class="nav-link" to="#">Contato</Link> </li>
              </ul>
              <ul class="navbar-nav">
                <li class="nav-item"> <Link class="nav-link" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} ><FiUser color="Green" /> {nameLogin}</Link> </li>


                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={config}><FiSettings color="GREEN" />  Configurações </MenuItem>
                  <MenuItem onClick={handleLogout}> <FiLogOut color="Red" />  Logout</MenuItem>
                </Menu>

              </ul>
            </div>
          </div>
        </nav>
        <div class="pt-5">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="">Olá,&nbsp;<small class="text-muted">{nameLogin}</small></h2>
              </div>
            </div>
          </div>
        </div>
        <div class="py-5 mx-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6" >
                <h1 class="display-6">Seus Projetos</h1>

              </div>
              <div class="col-md-3  offset-md-9" >

                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                  Cadastrar Projetos
    </Button>
                <Dialog open={open} onClose={handleClosee} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Cadastrar Projetos</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Insira os dados do projeto abaixo:
          </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="titulo"
                      label="Título"
                      type="email"
                      fullWidth
                      value={Titulo}
                      onChange={e => setTitulo(e.target.value)}
                    />
                    <TextField
                      margin="dense"
                      id="descricao"
                      label="Descrição"
                      type="text"
                      fullWidth
                      value={Descricao}
                      onChange={e => setDescricao(e.target.value)}
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around">

                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          label="Data da Criação"
                          format="dd/MM/yyyy"
                          value={Data_de_criacao}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />

                      </Grid>
                    </MuiPickersUtilsProvider>


                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClosee} color="primary">
                      Cancelar
          </Button>
                    <Button onClick={Cprojetos} color="primary">
                      Cadastrar
          </Button>
                  </DialogActions>
                </Dialog>


              </div>











            </div>

            <div class="row px-0">
              <div class="table-responsive px-0 mx-0">
                <table class="table table-borderless table-hover table-sm table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Título</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Data de Criação</th>
                      <th scope="col">Responsável</th>
                    </tr>
                  </thead>
                  <tbody >

                    {Projetos.map(Projetos => (
                      <tr id="tr">
                        <th scope="row">{Projetos.id}</th>
                        <td>{Projetos.Titulo}</td>
                        <td>{Projetos.Descricao}</td>
                        <td> {moment(Projetos.Data_de_criacao).format('DD/MM/YYYY')} </td>

                        <td> {Projetos.Responsavel_id}</td>


                        <button onClick={() => handleDeleteProjetos(Projetos.id)} type="button">
                          <FiTrash2 title="Excluir" size={12} color="#A8A8B3" />
                        </button>
                      </tr>

                    ))}




                  </tbody>
                </table>
              </div>
              <div class="text-center col-md-7 mx-auto">
              </div>
            </div>
          </div>
        </div>
        <div class="py-5 mx-3" >
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1 class="display-6">Seus Eventos</h1>
              </div>
              <div class="col-md-3  offset-md-9" >

                <Button variant="outlined" color="primary" onClick={handleClickOpenn}>
                  Cadastrar Eventos
    </Button>




                <Dialog open={openn} onClose={handleCloseee} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Cadastrar Eventos</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Insira os dados do Evento abaixo!
          </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="titulo"
                      label="Título"
                      type="email"
                      fullWidth
                      required
                      value={Titulo}
                      onChange={e => setTitulo(e.target.value)}
                    />
                    <TextField
                      margin="dense"
                      id="descricao"
                      label="Descrição"
                      type="text"
                      fullWidth
                      required
                      value={Descricao}
                      onChange={e => setDescricao(e.target.value)}
                    />
                    <TextField
                      margin="dense"
                      id="Local"
                      label="Local do Evento"
                      type="text"
                      value={Local_do_evento}
                      onChange={e => setLocal_do_evento(e.target.value)}
                      fullWidth
                      required
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around">

                        <KeyboardDatePicker
                          fullWidth
                          required
                          margin="normal"
                          id="date-picker-dialog"
                          label="Data do Evento"
                          format="dd/MM/yyyy"
                          value={Data_do_evento}
                          onChange={DefineDataE}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />


                        <TextField
                          margin="nomral"
                          id="time"
                          required
                          label=""
                          type="Time"
                          value={Hora_do_evento}
                          onChange={e => setHora_do_evento(e.target.value)}

                        />
                      </Grid>

                    </MuiPickersUtilsProvider>







                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseee} color="primary">
                      Cancelar
          </Button>
                    <Button onClick={Ceventos} color="primary">
                      Cadastrar
          </Button>
                  </DialogActions>
                </Dialog>


              </div>
            </div>
            <div class="row px-0">
              <div class="table-responsive px-0 mx-0">
                <table class="table table-borderless table-hover table-sm table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Título</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Local do Evento</th>
                      <th scope="col">Data do Evento</th>
                      <th scope="col">Hora do Evento</th>
                      <th scope="col">Responsável</th>
                    </tr>
                  </thead>
                  <tbody>

                    {Eventos.map(Eventos => (
                      <tr>
                        <th scope="row">1</th>
                        <td>{Eventos.Titulo}</td>
                        <td>{Eventos.Descricao}</td>
                        <td>{Eventos.Local_do_evento}</td>
                        <td>{moment(Eventos.Data_do_evento).format('DD/MM/YYYY')}</td>
                        <td>{Eventos.Hora_do_evento}</td>
                        <td>{Eventos.Responsavel_id}</td>

                        <button onClick={() => handleDeleteEventos(Eventos.id)}
                          type="button">
                          <FiTrash2 size={12} title="Excluir" color="#A8A8B3" />
                        </button>
                      </tr>

                    ))}


                  </tbody>
                </table>
              </div>
              <div class="text-center col-md-7 mx-auto">
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

    )
  } else {
    if (status == null) {

      history.push('/Login')
      return null;
    }


  }







};