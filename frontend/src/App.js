import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Contents from './components/Contents'
import Upload from './components/Upload'
import Visualize from './components/Visualize'
import Split from './components/Split'
import Training from './components/Training'
import Testing from './components/Testing'

import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />  
          <Route path='/content' element={ <Contents /> } />
          <Route path='/upload' element={ <Upload /> } />
          <Route path='/visualize' element={ <Visualize /> } />
          <Route path='/split' element={ <Split /> } />
          <Route path='/train' element={ <Training /> } />
          <Route path='/test' element={ <Testing /> } />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
