import { Welcome } from '../../../client/components/Welcome'
import React from 'react'
import { shallow } from 'enzyme'

const setUp = (props = {}) => {
    const component = shallow(<Welcome {...props} />)
    return component
} 

describe('Welcome Component Tests', () => {

    let component
    beforeEach(() => {
        component = setUp()
    })

    it('Should render a logo image', () => {
        const logo = component.find(`[data-test="home-logo"]`)
        expect(logo.length).toBe(1)
    })

    it('Should render a title', () => {
        const title = component.find('.home-gameTitle')
        expect(title.length).toBe(1)
    })

    it('Should change state to instructions', () => {
        const state = component.find
    })
})



// const wrapper = shallow(<Foo />);

// expect(wrapper.find('.clicks-0').length).to.equal(1);
// wrapper.find('a').simulate('click');
// expect(wrapper.find('.clicks-1').length).to.equal(1);