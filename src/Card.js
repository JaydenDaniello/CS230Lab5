import React from 'react';

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

  export { Card };