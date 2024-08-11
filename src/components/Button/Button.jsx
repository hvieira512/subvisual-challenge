import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, icon, text, order = "normal" }) => {
    return (
        <button className="btn" onClick={onClick} disabled={disabled}>
            {order === "normal" && <span className="icon">{icon}</span>}
            <span className="text">{text}</span>
            {order === "reversed" && <span className="icon">{icon}</span>}
        </button>

    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    order: PropTypes.string,
};

export default Button;
