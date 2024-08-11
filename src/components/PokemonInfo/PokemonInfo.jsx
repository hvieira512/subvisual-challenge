import { capitalize } from "../../utils/utils";
import PropTypes from 'prop-types';

const PokemonInfo = ({ pokemon }) => {
    return (
        <div>
            <h2>{capitalize(pokemon.name)}</h2>
            <h3>#{pokemon.id}</h3>
            {pokemon.sprites.back_default && <img src={pokemon?.sprites?.back_default} alt={pokemon.name} />}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
}

PokemonInfo.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        sprites: PropTypes.shape({
            front_default: PropTypes.string.isRequired,
            back_default: PropTypes.string,
        }).isRequired,
        height: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
    }).isRequired,
};

export default PokemonInfo;
