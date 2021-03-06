import React from 'react';
import { render, screen, mount } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Container from './Container';


configure({adapter: new Adapter()});
test('renders Container component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Container')).toExist();
 });