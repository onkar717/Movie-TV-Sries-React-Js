import React from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import SimpleBottomNavigation from './components/mainnav';
import { Container } from '@mui/system';
import Trending from './components/Trending';
import  Search from './components/Search';
import Movie from './components/Movie'
import Series from './components/Series'

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Header />
    <div className="app">
      <Container>
        <Routes>
          <Route path='/' Component={Trending} />
          <Route path='/movie' Component={Movie} />
          <Route path='/serach' Component={Search} />
          <Route path='/series' Component={Series} />
        </Routes>
      </Container>
    </div>
      <SimpleBottomNavigation />
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
