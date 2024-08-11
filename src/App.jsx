import { useEffect, useState } from 'react';
import PokemonInfo from './components/PokemonInfo/PokemonInfo.jsx';
import { getBestMatch } from './utils/utils.js';
import './main.css';

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeList] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [curPokeId, setCurPokeId] = useState(1);

  const fetchPokeData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
    const data = await response.json();
    return data.results;
  }

  // Fetch the Pokemon Names Data when the component mounts
  useEffect(() => {
    const loadPokeData = async () => {
      setPokeList(await fetchPokeData());
    };
    loadPokeData();
  }, []);

  useEffect(() => {
    const loadPokemonById = async () => {
      await fetchPokemonData(curPokeId, setSelectedPokemon, setError);
    };
    loadPokemonById();
  }, [curPokeId]);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const pokeNames = pokeList.map(pokemon => pokemon.name);
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

  const fetchPokemonData = async (pokemon, setSelectedPokemon, setError) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      setSelectedPokemon(data);
      setError(null);
    } catch {
      setSelectedPokemon(null);
      setError("No Matching Pokemon was found");
    }
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const bestMatch = getBestMatch(filteredPokeList, searchQuery);

    if (bestMatch) await fetchPokemonData(bestMatch, setSelectedPokemon, setError);
  }

  const handlePrevious = () => { if (curPokeId > 1) setCurPokeId(curPokeId - 1); }
  const handleNext = () => { if (curPokeId < 1025) setCurPokeId(curPokeId + 1); }

  return (<>
    <div className="App">
      <h1>Subvisual Challenge</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search Pokemon..." value={searchQuery} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {filteredPokeList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      {selectedPokemon && <PokemonInfo pokemon={selectedPokemon} />}
      <div>
        <button onClick={handlePrevious} disabled={curPokeId === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={curPokeId === 1025}>
          Next
        </button>
      </div>
    </div>
  </>);
}

export default App
