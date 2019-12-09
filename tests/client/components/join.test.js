import { Join } from '../../../client/components/Join'

import React from 'react'
import { shallow } from 'enzyme'

const setUp = (props = {}) => {
  const component = shallow(<Join {...props} />)
  return component
}

describe('Join Component Tests', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('Should render game title', () => {
    const title =  component.find('.setup-gameTitle')
    expect(title.length).toBe(1)
  })

})