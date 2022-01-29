import './App.css';
import ListTemplates from './components/ListTemplates';
import { useState } from 'react';

function App() {

  const [template,setTemplate] = useState("");


  
  return (
    <div className="App">
    
      <ListTemplates setter={setTemplate} />

      <h1>{template}</h1>
    </div>
  );
}

export default App;
