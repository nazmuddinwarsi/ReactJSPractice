import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App,{App2}from './App';
import User from './User';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import HelloMessege from './HelloMessege';
import House from './House';
let a="Amir";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <App/>
  <App2/>
  {/* <Header name={a} age="29"/>
  <Header name="Adil" age="29"/>
    <User />
    <HelloMessege name={a} age="29">
      <p>Children  Element 1</p>
    </HelloMessege>
    <HelloMessege name="Adil" age="28">
      <button type="button" value="Click">Click</button>
    </HelloMessege> */}
  </React.StrictMode>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
