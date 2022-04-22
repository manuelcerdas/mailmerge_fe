import './App.css';
import ListTemplates from './components/listTemplates';
import ListFields from './components/listFields';
import Template from './components/template';
import Button from './components/button';
import utils from './components/utils';
import { useState } from 'react';

function App() {

  const [template, setTemplate] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [fields, setFields] = useState([]);
  const [templates, setTemplates] = useState([]);


  async function getTemplatesName() {
    const result = await utils.getTemplatesName();
    const list = await result;
    setTemplates(list);
  }

  async function getFields(templateName) {
    setTemplateName(templateName);
    const result = await utils.getFields(templateName);
    const list = await result;
    setFields(list);
  }

  async function getTemplate(values) {
    const result = await utils.getTemplate(templateName);
    const _template = await result;
    replaceValues(values, _template);
  }

  const replaceValues = (values, template) => {
    for (let x in values) {
      const text = `{{${x}}}`;
      template = template.replace(text, values[x]);
    }
    setTemplate(template);
  };

  return (
    <div className="App">
      <Button text={"Get templates"} onClick={getTemplatesName} />
      <ListTemplates templates={templates} onClick={getFields} />
      <ListFields fields={fields} onClick={getTemplate} />
      <Template template={template} />
    </div>
  );
}

export default App;
