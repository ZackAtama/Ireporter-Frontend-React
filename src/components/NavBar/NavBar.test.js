import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './index';

describe('<NavBar />', () => {
  it('should render the app component', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });  
});