import Button from "../Button/Button";

const Navigation = ({ pokemonId, onNavigate }) => {
    return (
        <div>
            <Button
                onClick={() => onNavigate(pokemonId - 1)}
                disabled={pokemonId <= 1}
                order="normal"
                icon="←"
                text="Back" />
            <Button
                onClick={() => onNavigate(pokemonId + 1)}
                disabled={pokemonId >= 1025}
                order="reversed"
                icon="→"
                text="Next" />
        </div>
    );
}

export default Navigation;
