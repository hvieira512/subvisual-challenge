import { capitalize } from "../../utils/utils";

const PokemonInfo = ({ pokemon }) => {
    return (
        <div>
            <h2>{capitalize(pokemon.name)}</h2>
            <h3>#{pokemon.id}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
}

export default PokemonInfo;
