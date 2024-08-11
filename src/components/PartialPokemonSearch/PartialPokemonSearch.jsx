import { useState, useEffect } from "react";

const PartialPokemonSearch = ({ baseUrl }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchPokemonNames = async () => {
        try {
            const response = await fetch(`${baseUrl}?limit=1000`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.results.map(pokemon => pokemon.name);
        } catch (error) {
            console.error('Failed to fetch Pokémon names:', error);
            return [];
        }
    };

    useEffect(() => {
        const loadPokemonData = async () => {
            const names = await fetchPokemonNames();
            setPokemonList(names);
            setFilteredPokemonList(names);
        };
        loadPokemonData();
    }, []);

    useEffect(() => {
        const filtered = pokemonList.filter(pokemon =>
            pokemon.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPokemonList(filtered);
    }, [searchQuery, pokemonList]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search Pokémon..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredPokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon}</li>
                ))}
            </ul>
        </div>
    );
}

export default PartialPokemonSearch;
