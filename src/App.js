import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList';
import StarshipDetails from './pages/StarshipDetail/StarshipDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
