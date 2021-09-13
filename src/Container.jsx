import { Autocomplete } from '@shopify/polaris';
import React from 'react';
import CardCollection from './CardCollection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      gridTemplateColumns: 'repeat(11, 1fr)',
      gridAutoRows: 'minmax(60px, auto)'
    }

    const one = {  
      gridColumn: '1 / 12',
      gridRow: '1 / 6',
      backgroundColor: 'antiquewhite',
      backgroundImage: 'url("./earth.png")',
      backgroundSize: 'cover',
      marginBottom: '20px'
    } 
 
    const two = {
      gridColumn: '1 / 2',
      gridRow: '6 / 14',
      backgroundColor: 'whitesmoke'
    }

    const three = {
      gridColumn: '2 / 12',
      gridRow: '6 / 14',
     // border: 'solid 5px black'

    }

    const four = {   
      gridColumn: '11 / 13',
      gridRow: '6 / 14',
      backgroundColor: 'whitesmoke',
    } 

    const five = {
      gridColumn: '1 / 12',
      gridRow: '14 / 16',
      backgroundImage: 'url("./earth.png")',
      backgroundSize: 'cover',
    }

    return(
      <div style={wrapper}>
        <div style={one}>
          <p style={{color: 'whitesmoke', textAlign: 'left', marginLeft: '20px', fontSize: '2em', fontWeight: 'bold'}}>Spacestagram</p>
            <p style={{color: 'whitesmoke', textAlign: 'left', marginLeft: '20px', fontSize: '1em', flexWrap: 'wrap', fontStyle: 'italic'}}>Brought to you by NASA Astronomy Photo of the Day (APOD) API</p>
        </div>
          <div style={two}>
          </div>
            <div style={three}>
              <CardCollection />     
            </div>
              <div style={four}></div> 
                <div style={five}> 
                  <p id="heart" style={{color: 'whitesmoke', marginTop: '2em'}}>Made with ❤ by Brandon Niu</p>
        </div> 
        
      </div>
    )
  }


}
export default Container;
