import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCards = ({ pokemon }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        setImage(response.data.sprites.front_default);
      } catch (error) {
        console.error('Error fetching Pokemon image', error);
      }
    };
    fetchPokemonImage();
  }, [pokemon.name]);

  return (
    <div className="pokemon-card">
      <img src={image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCards;
