import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, icon, text, order = "normal" }) => {
    return (
        <button
            className="btn flex gap-1"
            {...(onClick ? { onClick } : {})}
            {...(disabled !== undefined ? { disabled } : {})}
        >
            {order === "normal" && <div className="icon">{icon}</div>}
            <div className="text">{text}</div>
            {order === "reversed" && <div className="icon">{icon}</div>}
        </button>

    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    order: PropTypes.string,
};

export default Button;
