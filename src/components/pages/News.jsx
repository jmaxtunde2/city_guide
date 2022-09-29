import React, { Component } from 'react';
import NewsCards from '../NewsCards';
import { InfoConsumer } from '../context';

class News extends Component {
  render() {
    return (
      <InfoConsumer>
        {
          value => {
            return value.news.map(item => {
              return <NewsCards key={item.id} item={item} />;
            })
          }
        }
      </InfoConsumer>
    )
  }
}

export default News;