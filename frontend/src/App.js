import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Contents from './components/Contents'

import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path='/content' element={ <Contents /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
