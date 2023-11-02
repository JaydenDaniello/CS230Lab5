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

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active text-white" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Home</a>
          <a className="nav-item nav-link text-white" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">About</a>
          <a className="nav-item nav-link text-white" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Contact</a>
        </div>
      </div>
      <form className="form-inline ml-auto">
        <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
    
  );
}


function Card() {
  return (
    <center>
    <div className="cards" style={{margin:'auto', display:'block'}}>
      <div className="row">
        <div className="col-sm-4">
          <div className="card text-white bg-primary mb-3" style={{ width: '18rem' }}>
            <div className="card-header">Card 01</div>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
            <div className="card-header">Card 02</div>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-white bg-success mb-3" style={{ width: '18rem' }}>
            <div className="card-header">Card 03</div>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </center>
  );
}


export {
  Navbar, 
  Card
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

