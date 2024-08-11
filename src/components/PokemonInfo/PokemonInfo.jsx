const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonInfo = ({ pokemon }) => {
    return (
        <div>
            <h2>{capitalizeFirstLetter(pokemon?.name)}</h2>
            <p>ID: {pokemon?.id}</p>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
        </div>
    );
}

export default PokemonInfo;
