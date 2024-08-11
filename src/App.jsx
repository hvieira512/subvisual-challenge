import { useState } from 'react';
import Search from './components/Search/Search';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import Navigation from './components/Navigation/Navigation';
import './main.css';

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = async (name) => {
    if (!name) {
      setError('Please enter a Pokemon name.');
      return;
    }

    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    name = String(name).toLowerCase();

    try {
      const response = await fetch(`${baseUrl}${name}`);

      if (!response.ok) {
        throw new Error('Pokemon not found');
      }

      const data = await response.json();

      setPokemon(data);
      setError(null);
    } catch (err) {
      setPokemon(null);
      setError(err.message);
    };
  }

  return (<>
    <div className="App">
      <Search onSearch={fetchPokemon} />
      {error && <p>{error}</p>}
      {pokemon && <PokemonInfo pokemon={pokemon} />}
      <Navigation pokemonId={pokemon?.id} onNavigate={fetchPokemon} />
    </div>
  </>);
}

export default App
