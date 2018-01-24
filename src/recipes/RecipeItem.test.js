// src/recipes/RecipeItem.test.js
import React from 'react'
import { shallow } from 'enzyme'
import RecipeItem from './RecipeItem'
import Pescatarian from "../images/pescatarian.svg"
import Vegan from "../images/vegan.svg"
import Vegetarian from "../images/vegetarian.svg"
// import imageIcon from "../images/"

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,  //What we want to test on in the
    pescatarian: false,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('recipe')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).toHaveText(recipe.title)
  })

  it("renders Vegetarian icon", () => {
    expect(container.find('ul > li > img')).toHaveProp('src', Vegetarian)
  })

  // it('shows a 🥕  when it is vegetarian', () => {
  //   expect(container.find('ul > li')).toHaveText('🥕')
  // })
  // it('shows a 🌾  when it is vegan', () => {
  //   expect(container.find('ul > li')).toHaveText('🌾')
  // })
  // it('shows a 🐟  when it is pescatarian', () => {
  //   expect(container.find('ul > li')).toHaveText('🐟')
  // })
})
