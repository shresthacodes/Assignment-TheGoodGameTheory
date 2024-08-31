import React from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Pokémon List</h1>
      <PokemonList />
    </div>
  );
};

export default App;
