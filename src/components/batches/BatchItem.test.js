// src/recipes/RecipeItem.test.js
import React from 'react'
import { shallow } from 'enzyme'
import {BatchItem} from './BatchItem'

// import imageIcon from "../images/"

const batch = {
  _id: "3",
  name: 'b3',
  start_date: Date.now.toString(),
  end_date: Date.now.toString(),
  userId: "5a6756000f162e5f5f5756f7"
}

describe('<BatchItem />', () => {
  const container = shallow(<BatchItem { ...batch } />)

  it('is wrapped in a div tag', () => {
    expect(container.find('div')).toHaveTagName('div')
  })
  // it('is wrapped in a link tag with correct link to batches route', () => {
  //   expect(container.find('Link')).toHaveProp('to', '/batches/3')
  // })
  it("is wrapped in a paper tag with onClick method", () => {
    expect(container.find("Paper")).toHaveProp("onClick")
  })
  it('shows the batch name in an h4 tag', () => {
    expect(container.find('h4')).toHaveText('Batch: b3')
  })


})
