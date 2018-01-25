import React from 'react'
import {shallow} from 'enzyme'
import { BatchesContainer } from './BatchesContainer'
import BatchItem from './BatchItem'

const batches = [
  {
    _id: "1",
    name: 'b1',
    start_date: Date.now.toString(),
    end_date: Date.now.toString(),
    userId: "5a6756000f162e5f5f5756f7"
  },
  {
    _id: "2",
    name: 'b2',
    start_date: Date.now.toString(),
    end_date: Date.now.toString(),
    userId: "5a6756000f162e5f5f5756f7"
  },
  {
    _id: "3",
    name: 'b3',
    start_date: Date.now.toString(),
    end_date: Date.now.toString(),
    userId: "5a6756000f162e5f5f5756f7"
  },
]

describe("<BatchesContainer />", () => {
  const container = shallow(<BatchesContainer batches={batches} />)

  it("is wrapped in a div with class name 'batches'", () => {
    expect(container).toHaveClassName('batchesContainer')
  })

  it('renders all batches as a BatchItem', () => {
    batches.map((batch, index) => {
      return expect(container).toContainReact(<BatchItem key={index} { ...batch } />)
    })
  })

  it("renders exactly 3 batchItems", () => {
    expect(container.children().length).toEqual(3)

  })

})
