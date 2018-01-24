import React from 'react'
import {shallow} from 'enzyme'
import BatchesContainer from './BatchesContainer'
import BatchItem from './BatchItem'

const batches = [
  {
    name: 'b1',
    start_date: Date.now,
    end_date: Date.now
  },
  {
    name: 'b2',
    start_date: Date.now,
    end_date: Date.now
  },
  {
    name: 'b3',
    start_date: Date.now,
    end_date: Date.now
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

})
