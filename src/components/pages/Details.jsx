import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Reviews from '../Reviews';

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {data =>{
            const {
              id,
              headerTitle,
              headerSubTitle,
              headerText,
              img,
              title,
              maps,
              description
          } = data.detailInfo;

          return(
              <React.Fragment>
                <div className="container align-items-center">
                    <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                    <h4 className='display-5'>{headerSubTitle}</h4>
                    <p>{headerText}</p>

                    {/* Social Icon */}
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-2">
                              <i className='fa fa-facebook-f'></i>
                            </div>
                            <div className="col-2">
                              <i className='fa fa-twitter'></i>
                            </div>
                            <div className="col-2">
                              <i className='fa fa-google-plus'></i>
                            </div>
                            <div className="col-2">
                              <i className='fa fa-reddit'></i>
                            </div>
                            <div className="col-2">
                              <i className='fa fa-whatsapp'></i>
                            </div>
                            <div className="col-2">
                              <i className='fa fa-facebook-messenger'></i>
                            </div>
                        </div>
                    </div>

                    <br/>

                    {/* Social Icon */}

                    {/* Nav Link */}

                      <div className="container">

                      <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        {/* About Place */}
                        <button class="nav-link active" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" type="button" role="tab" aria-controls="nav-about" aria-selected="true">About Place</button>
                        {/* Reviews Link */}
                        <button class="nav-link" id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab" aria-controls="nav-reviews" aria-selected="false">Reviews</button>
                          {/* Maps Link */}
                        <button class="nav-link" id="nav-maps-tab" data-bs-toggle="tab" data-bs-target="#nav-maps" type="button" role="tab" aria-controls="nav-maps" aria-selected="false">Maps</button>
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                           <h2 className="mb-3">
                              {title}
                            </h2>
                            <p>{description}</p>
                            <img src={img} alt={title} className="img-thumbnail img-fluid" />
                      </div>
                      <div class="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
                      <Reviews/>
                      </div>
                      <div class="tab-pane fade" id="nav-maps" role="tabpanel" aria-labelledby="nav-maps-tab">
                      <iframe src={maps} style={{border: '0', height: '28.125rem', width:'100%', frameBorder:'0'}}></iframe>
                      </div>
                    </div>
                       
                      </div>

                    {/* Nav Link */}
                </div>
              </React.Fragment>
          );
          }
        }
      </InfoConsumer>
    )
  }
}

export default Details;