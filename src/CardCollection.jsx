import React, {Component} from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, MediaCard, Button} from '@shopify/polaris';
import { PossibleTypeExtensionsRule } from 'graphql';


class CardCollection extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  
  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=fIhSbZEQxCzXFOV3hPIpJxI9G7yUENMJb1rF4DoW&count=6")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("api call", result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const flexContainer = {
      display: 'flex',
      flexWrap: 'wrap',
      width: 'auto',
      //height: 'auto'
      //alignContent: 'flex-start'
    }

    const flexItem = {
      width: '33%',
      height: '50%',
      order: '3'


    }
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <div style={flexContainer}>
          {items.map((item) => (
            <div style={flexItem} id={item.date}>
            <MediaCard title={item.title} primaryAction={{
              content: 'Learn about getting started',
              onAction: () => {}
            }} description={item.explanation.substr(0,100)+ "..."} popoverActions={[{ content: 'Dismiss', onAction: () => {} }]} size="small">
              <img alt="" width="100%" height="100%" style={{
                objectFit: 'cover',
                objectPosition: 'center'
                  }} src={item.url} />
            </MediaCard>
            </div>
          ))}
        </div>


      );
    }
  }

}


   //api key  fIhSbZEQxCzXFOV3hPIpJxI9G7yUENMJb1rF4DoW
   // https://api.nasa.gov/planetary/apod?api_key=fIhSbZEQxCzXFOV3hPIpJxI9G7yUENMJb1rF4DoW
   // date, start_date, end_date, count, thumbs, api_key
   //HTTP Request GET https://api.nasa.gov/planetary/apod




export default CardCollection;