const ListTemplates = (props) => {

    if (props.templates) {
        return (
            <div className="list-templates-component">
                <ul className="list-templates">
                    {props.templates.map((item, index) => <li className="list-templates-item" key={index} onClick={() => props.onClick(item)}>{item}</li>)}
                </ul>
            </div>
        );
    } else {
        return <></>;
    }
}

export default ListTemplates;