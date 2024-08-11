import { capitalize } from "../../utils/utils";
import PropTypes from 'prop-types';

const PokemonInfo = ({ pokemon }) => {
    return (
        <div>
            <h2>#{pokemon.id} {capitalize(pokemon.name)}</h2>
            <div className="flex gap-1 align-items-center justify-content-center">
                {pokemon.sprites.back_default && <img src={pokemon?.sprites?.back_default} alt={pokemon.name} />}
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="flex gap-1 align-items-center justify-content-center">
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
            </div>
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
