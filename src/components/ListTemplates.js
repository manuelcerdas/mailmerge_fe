import React, { useState } from "react";
import reactDom from "react-dom";

const ListTemplates = () => {
    
    var templates = [];
    const [list,setList] = useState(templates);

    var  request  =  new  XMLHttpRequest(); 
    request.open('GET','/dummydata/templates.json',  true);    

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
        setList(aux);
    }

    request.send();
    
    if (list.length === 0) {
        return (<p>Loading ...</p>)
    }
    else {
        return (
            <div>
                <p><strong>{list.length} Available Templates </strong></p>          
                <ul>
                    {list.map(item => <li key="{item}">{item}</li>)}
                </ul>                
            </div>
        );
    }
    
}

export default ListTemplates;