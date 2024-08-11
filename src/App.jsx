import { useEffect, useState } from 'react';
import { getBestMatch } from './utils/utils.js';
import PokemonInfo from './components/PokemonInfo/PokemonInfo.jsx';
import Button from './components/Button/Button.jsx';
import './main.css';

const cache = {};

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeList] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [curPokeId, setCurPokeId] = useState(1);

  // Fetch all the Pokémons
  const fetchPokeData = async () => {
    if (cache['allPokemons']) return cache['allPokemons'];
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
    console.log("API REQUEST");
    const data = await response.json();
    cache['allPokemons'] = data.results;
    return data.results;
  }

  // Fetch when the component mounts
  useEffect(() => {
    const loadPokeData = async () => {
      setPokeList(await fetchPokeData());
    };
    loadPokeData();
  }, []);

  // Do this every time the value of curPokeId changes
  useEffect(() => {
    const loadPokemonById = async () => {
      await fetchPokemonData(curPokeId, setSelectedPokemon, setError);
    };
    loadPokemonById();
  }, [curPokeId]);

  // Do this every time the input is changed 
  // within 3 characters minimum
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

  // Stop default behaviour of the submit button
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const fetchPokemonData = async (pokemon, setSelectedPokemon, setError) => {
    if (cache[`pokemon_${pokemon}`]) {
      setSelectedPokemon(cache[`pokemon_${pokemon}`]);
      setCurPokeId(cache[`pokemon_${pokemon}`].id);
      setError(null);
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      console.log("API REQUEST");
      const data = await response.json();
      cache[`pokemon_${pokemon}`] = data;  // Cache the result
      setSelectedPokemon(data);
      setCurPokeId(data.id);
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
      <div className="navigation">
        <Button
          onClick={handlePrevious}
          disabled={curPokeId === 1}
          icon="←"
          text="Back"
        />
        <Button
          onClick={handleNext}
          disabled={curPokeId === 1025}
          icon="→"
          text="Next"
          order="reversed"
        />
      </div>
    </div>
  </>);
}

export default App
