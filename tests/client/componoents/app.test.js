import React from 'react'
import { mount } from 'enzyme'

import App from '../../../client/components/App'

test('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = mount(<Provider><App /></Provider>)
  expect(wrapper.text()).toMatch(expected)
})
