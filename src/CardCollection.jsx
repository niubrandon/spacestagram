import React, {Component} from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, MediaCard, Button} from '@shopify/polaris';
import { PossibleTypeExtensionsRule } from 'graphql';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

class CardCollection extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      likes: {},
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.persist();
    
      console.log("the like button you clicked first time or not ",e.target.id)
      this.setState(prevState => ({
        likes: {
          ...prevState.likes,
          [e.target.id]: !(e.target.id in prevState.likes) ? true : !(prevState.likes[e.target.id])
        }
       }), function() {
          console.log("finishing setState", this.state)

        }
      );

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
      width: '30%',
      height: '46%',
      margin: '5px',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    }

    const flexContianerVertical = {
      flexDirection: 'column'
    }

    const flexItemCard = {
      width: '100%'
    }

    
    
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (    
        <div style={flexContainer}>
          {items.map((item) => {
             const colorToShow = (!(item.date in this.state.likes) || (this.state.likes[item.date] === false)) ? 'black' : 'rgb(218, 95, 95)';

           return <div style={flexItem}  key={item.date.toString()}>
                    <div style={flexContianerVertical}>
                      <div style={{height: '250px'}}><img alt="" style={{width:"100%", height: "100%"}} src={item.url} /></div>
                        <div style={{height: '50px'}}>
                          <p style={{textAlign: 'left', fontWeight: '900', flexWrap: 'wrap'}}>{ this.state.isLoaded === false ? "Loading..." : item.title}</p>
                            <p style={{textAlign: 'left', fontWeight: '700'}}>{item.date}</p>
                      </div>
                        <div style={{height: '150px', overflowY: 'scroll', textAlign:'initial'}}>
                          <p>{item.explanation}</p></div>
                            <button id={item.date} className="click" onClick={this.handleClick} style={{height: '50px', width: '50px', margin: '5px', borderRadius: '10px', color: 'whitesmoke', border: 'whitesmoke'}} >
                              <FontAwesomeIcon icon={faHeart} style={{color: colorToShow, pointerEvents: 'none', height: '2em', width: '2em'}} />
                            </button>
                      </div>
                    </div>
          })}
        </div>


      );
    }
  }

}


   //api key  fIhSbZEQxCzXFOV3hPIpJxI9G7yUENMJb1rF4DoW
   // https://api.nasa.gov/planetary/apod?api_key=fIhSbZEQxCzXFOV3hPIpJxI9G7yUENMJb1rF4DoW
   // date, start_date, end_date, count, thumbs, api_key
   //HTTP Request GET https://api.nasa.gov/planetary/apod

//{this.state.likes[item.date.toString()] === true ? (<FontAwesomeIcon icon={faHeart} />) : (<FontAwesomeIcon icon={faHeartBroken} />)}

//


export default CardCollection;