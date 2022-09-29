import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
     <>
        <section className="my-5 py-5">
          <div className="container">
              <div className="well well-sm">
                <h3>
                  <strong>
                    Our Location
                  </strong>
                </h3>
              </div>
              <div className="row">
                <div className="col-md-7">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2652646740103!2d3.9171023138005747!3d7.4358725139493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed446255fd4b%3A0xbbf20caf3fca55e9!2sBodija%20Market%20Road%2C%20200132%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1661777834141!5m2!1sen!2sng" allowfullscreen="" 
                      loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border:'0', width:'100%',
                      height:'320px', frameBorder:'0'}}>

                </iframe>
                </div>
                <div className="col-md-5">
                  <h4> <strong>Contact Us</strong> </h4>
                  <form>
                    <div className="form-group mb-3">
                      <input type="text" className="form-control" placeholder='Name'/>
                    </div>
                    <div className="form-group mb-3">
                      <input type="email" className="form-control" placeholder='Email'/>
                    </div>
                    <div className="form-group mb-3 ">
                      <input type="tel" className="form-control" placeholder='Telephone'/>
                    </div>
                    <div className="form-group mb-3">
                      <textarea cols="30" rows="3" className='form-control'></textarea>
                    </div>

                    <Link className="btn btn-outline-primary text-uppercase mt-1">
                      <i className="fa fa-paper-plane-o" aria-hidden="true"/>
                      <i className="fa fa-telegram-plane" />&nbsp; Send
                    </Link>
                  </form>
                </div>
              </div>
          </div>
        </section>
     </>
    )
  }
}

export default Contact;