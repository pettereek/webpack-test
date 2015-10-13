jest.dontMock('../app/components/list-appender')

var React = require('react')
var ReactTestUtils = require('react-addons-test-utils')

const ListAppender = require('../app/components/list-appender')
const listElements = (el) => ReactTestUtils.scryRenderedDOMComponentsWithTag(el, 'li')
const add = (el, count) => {
  for (var i = 0; i < count; i++) {
    ReactTestUtils.Simulate.click(ReactTestUtils.findRenderedDOMComponentWithClass(el, 'button-add'))
  }
}
const clearAll = (el) => ReactTestUtils.Simulate.click(ReactTestUtils.findRenderedDOMComponentWithClass(el, 'button-clear'))

describe('ListAppender', () => {
 it('starts with an empty list', () => {
   const element = ReactTestUtils.renderIntoDocument(
     <ListAppender label="Test"/>
   )
   expect(listElements(element).length).toBe(0)
 })

 it('adds a list item when clicking the button', () => {
   const element = ReactTestUtils.renderIntoDocument(
     <ListAppender label="Test"/>
   )
   add(element, 15)
   expect(listElements(element).length).toBe(15)
 })

 it('clears the list', () => {
   const element = ReactTestUtils.renderIntoDocument(
     <ListAppender label="Test"/>
   )
   add(element, 1)
   expect(listElements(element).length).toBe(1)

   clearAll(element)
   expect(listElements(element).length).toBe(0)
 })
})

