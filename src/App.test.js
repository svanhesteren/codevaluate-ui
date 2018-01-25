import React from 'react'
import {shallow} from  'enzyme'
import App from './App'


describe ("<App />" , () => {
  const app = shallow(<App />)

  it('wraps everything MuiThemeProvider and a div', () => {
    expect(app).toHaveTagName('MuiThemeProvider')
  })
})
