import { Join } from '../../../client/components/Join'
import { Welcome } from '../../../client/components/Welcome'
import Create from '../../../client/components/Create'


import React from 'react'
import { shallow, mount } from 'enzyme'

const setUp = (props = {}) => {
  const component = shallow(<Join {...props} />)
  return component
}

// const setUp2 = (props = {}) => {
//   const component2 = shallow(<Welcome {...props} window={false}/>)
//   return component2
// }

describe('Join Component Tests', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('Should render game title', () => {
    const title =  component.find('.setup-gameTitle')
    expect(title.length).toBe(1)
  })

  it('Should render a team name input field', () => {
    const field = component.find('.setup-team__fields', '.setup-team__fields')
    expect(field.length).toEqual(1)
  })
  
  it('Should render a user name input field', () => {
    const field = component.find('.setup-user__fields', '.setup-user__fields')
    expect(field.length).toEqual(1)
  })

  it('Should change state when, user types in input fields', () => {
    const expected = 'TEST'
    const event = { target: { name: 'player', value: 'test'} }
    
    expect(component.find('#user-text').props().value).toBe('')
    
    component.find('#user-text').simulate('change', event)
    
    const actual = component.find('#user-text').props().value
    expect(actual).toBe(expected)

    // component.find("#create-btn").simulate('click', event)
    // console.log(component.state())
    // const actual = component.state().display
    // expect(actual).toContain(expected)

    // const changePageMock = jest.fn()

    // const component = shallow(<Join changePage={changePageMock}/>)

    // expect(changePageMock.mock.calls.length).toEqual(1)
  })

})


// describe('Join Component Tests', () => {
//   let component2
//   beforeEach(() => {
//     component2 = setUp2()
//   })

//   it('Should change state to create, when "Create Team" is clicked', () => {
//     console.log(component2.state())
//     const expected = 'create'
//     const event = { preventDefault: () => {} }
//     component2.find('#create-btn').simulate('click', event)
//     console.log(component2.state())
//     const actual = component2.state().display
//     expect(actual).toContain(expected)
//   })

// })