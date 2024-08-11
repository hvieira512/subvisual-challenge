import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import Navigation from './components/Navigation/Navigation';
import './main.css';

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeList] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const fetchPokeData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
    const data = await response.json();
    return data;
    //return data.results.map(pokemon => pokemon.name);
  }

  // Fetch the Pokemon Names Data when the component mounts
  useEffect(() => {
    const loadPokeData = async () => {
      setPokeList(await fetchPokeData());
    };
    loadPokeData();
  }, []);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const pokeNames = pokeList.results.map(pokemon => pokemon.name);
      const filtered = pokeNames.filter(pokemon =>
        pokemon.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPokeList(filtered);
    } else {
      setFilteredPokeList([]);
    }
  }, [searchQuery, pokeList]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (filteredPokeList.length > 0) {
      const bestMatch = filteredPokeList[0];
      console.log(bestMatch);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${bestMatch}`);
        const data = await response.json();
        setSelectedPokemon(data);
      } catch (err) {
        setError(err.message);
      }
    }
  }

  return (<>
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search Pokemon..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type='submit'>Search</button>
      </form>
      <ul>
        {filteredPokeList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>
        </div>
      )}
    </div>
  </>);
}

export default App
