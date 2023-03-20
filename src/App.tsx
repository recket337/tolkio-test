import React from 'react';
import './App.css';
import { FormMaker } from './components/FormMaker/FormMaker';
import { AUTH_FORM_ID } from './constants';
import { exampleConfig } from './mock';

function App() {
  return (
    <div className="App">
      <FormMaker id={AUTH_FORM_ID} config={exampleConfig} />
      <input type="submit" form={AUTH_FORM_ID} value="Submit"/>
    </div>
  );
}

export default App;
