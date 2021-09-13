import logo from './logo.svg';
import './App.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import CardCollection from './CardCollection';
import Container from './Container';

function App() {
  return ( 
    <div className="App">
      <Container />
    </div>

  );
}

export default App;
