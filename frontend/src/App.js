import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Contents from './components/Contents'
import Upload from './components/Upload'
import Visualize from './components/Visualize'

import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />  
          <Route path='/content' element={ <Contents /> } />
          <Route path='/upload' element={ <Upload /> } />
          <Route path='/visualize' element={ <Visualize /> } />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
