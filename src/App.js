import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
//import HellWord from './componets/HellWord';
import ExibirNomeIdade from './componets/ExibirNomeIdade';
import Contador from './componets/Contador';
import ListaTarefas from './componets/ListaTarefas';
import CicloVida from './componets/CicloVida';
import Condicional from './componets/Condicional';
import Navbar from './componets/layout/Navbar';
import Header from './componets/layout/Header';
import Acerca from './componets/pages/Acerca';
import Contacto from './componets/pages/Contacto';
import Inicio from './componets/pages/Inicio';
import Servico from './componets/pages/Servico';
import Container from './componets/layout/Container';
import Footer from './componets/layout/Footer';


function App() {

 // <ExibirNomeIdade />   
 // <Contador numeroInicial={0} />
  //<Contador numeroInicial={10} />
  //<ListaTarefas />
 // <CicloVida />


 // <Condicional />
 //<Header />

  // Suponhamos que eu tenha uma variável de estado para controlar se o usuário está logado ou não.
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  return (

    
    <Router>
      
    <Navbar />
    <Container customClass="min-height">
    
    <Routes>
   
      <Route exact path='/' element={<Inicio/>} />
      <Route path='/servicos' element={<Servico/>} />
      <Route path='/contacto' element={<Contacto/>} />
      <Route path='/acerca' element={<Acerca/>} />
      
      </Routes>
      </Container>
      
    <Footer />
  </Router>
  );
}

export default App;
