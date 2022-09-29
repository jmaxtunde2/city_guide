import React, { Component } from 'react';
import { InfoConsumer } from '../components/context';
import {Link} from 'react-router-dom';

class NewsCards extends Component {
  render() {
    
    const { id, newsTitle, newsText } =  this.props.item;
    return (
       <InfoConsumer>
        {
            value => (
                    <div className="card container mt-2 mb-2 p-4">
                        <div className="card-body">
                            <h5 key={id} className="card-title">{newsTitle}</h5>
                            <p className="card-text">
                                {newsText}
                            </p>
                            <Link className='card-link' to=""> Read More ... </Link>
                        </div>
                    </div>
            )
        }
       </InfoConsumer>
    )
  }
}


export default NewsCards;