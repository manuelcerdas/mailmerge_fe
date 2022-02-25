import React, { useState } from "react";

const ListTemplates = (props) => {
        
    const [list,setList] = useState([]);

    var  request  =  new  XMLHttpRequest(); 
    request.open('GET','https://mailmergev2.azurewebsites.net/list',  true);    

    request.onload = () => {
        var aux;
        if (request.status >= 200 && request.status < 400) {
            aux = JSON.parse(request.responseText);
            for (var i = 0; i < aux.length; i ++) {
                aux[i] = aux[i].substring(10);                
            }                                  
        } else {
            aux = [];
        }
        if (list.length == 0)
            setList(aux);
    }
    request.send();

    const clickItem = (e) => {        
        props.setter(e.target.innerText);
    }
                    
    if (list.length === 0) {
        return (<p>Loading ...</p>)
    }
    else {
        return (
            <div>
                <p><strong>{list.length} Available Templates </strong></p>          
                <ul onClick={clickItem}>
                    {list.map(item => <li key={(Math.random() * 5) + 1}>{item}</li>)}
                </ul>                
            </div>
        );
    }    
    
}

export default ListTemplates;