import React from 'react'
import {shallow} from  'enzyme'
import App from './App'

import RecipesContainer from './recipes/RecipesContainer'

describe ("<App />" , () => {
  const app = shallow(<App />)
  // const title = <Title content="All Recipes" />

  it('wraps everything in a div tag', () => { expect(app).toHaveTagName('div') })
  // it('contains a title', () => {expect(app).toContainReact(title)})
})
