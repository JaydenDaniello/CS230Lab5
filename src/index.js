import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Home() {
  return (
    <div className="Home">
      <h1>CS 230L</h1>
      <h2>Section - 003</h2>
      <p>WVU ID: 800366523</p>
      <p>Hi I am Jayden Daniello</p>
    </div>
  );
}


export { Home };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

