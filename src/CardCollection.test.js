import React from 'react';
import { render, screen, mount } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CardCollection from './CardCollection';


configure({adapter: new Adapter()});
test('expect 6 buttons from this component', () => {
  const wrapper = shallow(<CardCollection />);
  //has to implement await for fetch 
  expect(wrapper).toContainMatchingElements(6, 'button');
 });