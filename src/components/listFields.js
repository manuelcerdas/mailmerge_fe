import { useState } from 'react';

const ListFields = (props) => {
    const [state, setState] = useState({});

    if (props.fields.length) {

        function handleSubmit(e) {
            e.preventDefault();
            props.onClick(state);
        }

        function handleChange(e) {
            const target = e.target;
            const value = target.value;
            const name = target.name;
            state[name] = value;
            setState(state);
        }

        return (
            <form className='fields-form' onSubmit={handleSubmit}>
                {
                    props.fields.map((item, index) => (
                        <label key={index}>
                            {item}:
                            <input type="text" name={item} onChange={handleChange} />
                        </label>
                    ))
                }
                <div><input className="default-button" type="submit" value="Get template" /></div>
                
            </form>
        );
    } else {
        return <></>;
    }
}

export default ListFields;