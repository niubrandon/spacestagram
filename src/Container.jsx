import { Autocomplete } from '@shopify/polaris';
import React from 'react';
import CardCollection from './CardCollection';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlLink: "",
      title: "",
      description: "",
      dateCaptured: "",
      like: true
    };
  }
  render() {
    const wrapper = {
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gridAutoRows: 'minmax(75px, auto)'
    }

    const one = {  
      gridColumn: '1 / 11',
      gridRow: '1 / 3',
      backgroundColor: 'antiquewhite'
    } 
 
    const two = {
      gridColumn: '1 / 2',
      gridRow: '3 / 11',
      backgroundColor: 'whitesmoke'
    }

    const three = {
      gridColumn: '2 / 11',
      gridRow: '3 / 11',
      border: 'solid 5px black'

    }

    const four = {   
      gridColumn: '1 / 11',
      gridRow: '11 / 13',
      backgroundColor: 'antiquewhite'
    } 

    return(
      <div style={wrapper}>
        <div style={one}>
          <h1>Spacestagram</h1>
        </div>
        <div style={two}></div>
        <div style={three}>
            <CardCollection />     
        </div>
        <div style={four}></div> 
        
      </div>
    )
  }


}
export default Container;
