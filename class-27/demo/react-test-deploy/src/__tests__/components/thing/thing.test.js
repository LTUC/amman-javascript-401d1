import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Thing from '../../../components/thing/thing.js';

describe('<Thing />', () => {
  it('exists at the start of our application', () => {
    let app = shallow(<Thing />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('changes the state on click', ()=> {
    let app = mount(<Thing />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('stuff')).toBeFalsy();
    expect(app.find('span').text()).toContain('false');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Thing />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});