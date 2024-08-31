import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCards from './PokemonCards';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Error fetching the Pokemon data', error);
      }
    };
    fetchPokemons();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={handleSearchChange}
        value={search}
      />
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon) => (
          <PokemonCards key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
