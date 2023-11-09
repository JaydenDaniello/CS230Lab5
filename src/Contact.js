import React from 'react';

const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    margin: '0 auto', 
  };
const inputStyle = {
    width: '60%',
    padding: '10px',
    margin: '0 auto',
};

function Contact() {
    return (
        <div>
        <h1>Contact Us</h1>
        <form>
          <div style={inputContainerStyle}>
              <div className="form-group">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" className="form-control" style= {inputStyle} id="firstname" placeholder="Enter your first name" />
               </div>
              <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" className="form-control" style= {inputStyle} id="lastname" placeholder="Enter your last name" />
              </div>
              <div className="form-group">
                  <label htmlFor="number">Phone Number</label>
                  <input type="text" className="form-control" style= {inputStyle} id="phonenumber" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" style= {inputStyle} id="email" placeholder="Enter your email address" />
              </div>
              <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" className="form-control" style= {inputStyle} id="country" placeholder="Enter your country" />
              </div>
          
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" style= {inputStyle} id="message" rows="5" placeholder="Your Message"></textarea>
              
              </div>        
              </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  export { Contact };