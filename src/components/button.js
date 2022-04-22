const button = (props) => {
    return (
        <button className="default-button" onClick={() => props.onClick()}>{props.text}</button>
    );
}

export default button;