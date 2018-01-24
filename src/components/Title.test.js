import React from 'react'
import {shallow} from 'enzyme'
import Title from './Title'


describe ("<Title />", () => {
  const title = shallow(<Title content="Hello, world!" />)
  it ("has a wrapping h1 tag", () => {expect(title).toHaveTagName('h1')})
  it ("renders the content", () => {expect(title).toHaveText("Hello, world!")})

  describe("with a different content prop", () => {
    const title = shallow(<Title content="Something different" />)
    it ("renders different title text", () => {expect(title).toHaveText("Something different")})
  })

})
