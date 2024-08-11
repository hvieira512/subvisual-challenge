const Button = ({ onClick, disabled, icon, text, order = "normal" }) => {
    return (
        <button onClick={onClick} className="btn" disabled={disabled}>
            {order === "normal" && <span className="icon">{icon}</span>}
            <span className="text">{text}</span>
            {order === "reversed" && <span className="icon">{icon}</span>}
        </button>
    );
}

export default Button;
