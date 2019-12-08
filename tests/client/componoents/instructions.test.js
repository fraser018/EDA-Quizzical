import { Instructions } from '../../../client/components/Instructions'
import React from 'react'
import { shallow, mount } from 'enzyme'


// Tests to see that the Instructions component renders
test('test to see if instructions page renders', () => {
    const component = shallow(<Instructions/>)
  
    expect(component).toMatchSnapshot()
  
  })


  
// test('test state', () => {
//     const component = mount(<Instructions />);
//     component.find('[className="home-btns__btn"]').simulate('click');
//     expect(component.state('isLoading')).toEqual(true);
//     component.unmount();
//   });

