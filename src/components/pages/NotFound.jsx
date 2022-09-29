import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="error-template">
                <h1>Ops !</h1>
                <h2>Error 404 Not Found</h2>
                <div className="error-details">
                   Sorry, An error occured. The requested page was not found.
                </div>
                <div className="error-action">
                  <Link to="/" className='btn btn-outline-primary btn-lg m-2'>
                    <i className="fa fa-home"/>&nbsp; Back To Home
                  </Link>
                  <Link className='btn btn-outline-secondary btn-lg'>
                    <i className="fa fa-envelope"/>&nbsp; Support
                  </Link>
                </div>
              </div>
           </div>
        </div>
      </div>
    )
  }
}

export default NotFound;