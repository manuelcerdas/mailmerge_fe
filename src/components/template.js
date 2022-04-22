const Template = (props) => {

    if (props.template) {
        return (
            <textarea rows="15" cols="150" defaultValue={props.template}></textarea>
        );
    } else {
        return <></>;
    }
}

export default Template;