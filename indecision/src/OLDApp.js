import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

const title = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  list: [
    'list Item 1',
    'list Item 2'
  ]
}

 function App() {
  return (
    <div>
      <h1>{title.title}</h1>
      {title.subtitle && <p>{title.subtitle}</p>}
      <p>{title.list.length > 0 ? 'Options Available' : 'No Available Options'}</p>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
    </div>
  );
}

let count = 0;
const add1 = () => {
  count++;
  console.log(count);
  TemplateTwo();
};

const minus1 = () => {
  if(count != 0){
      --count;
  }
  console.log(count);
}

const reset = () => {
  count = 0;
  console.log('Reset to ' + count);
}

const TemplateTwo = ()=> {
  return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={add1}>+1</button>
    <button onClick={minus1}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
  );
}
    //Render Default
    export default TemplateTwo;

