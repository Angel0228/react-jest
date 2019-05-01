import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import CommnetBox from '../CommnetBox';

it('show a comment box', () => {
  const div = document.createElement('div')
  
  ReactDOM.render(<App />, div)
  
  // Look inside the div
  // and checks to see if the CommentBox is in there.
  expect(div.innerHTML).toContain('Comment Box')
  // expect(div).toHaveAnInstanceOf(CommnetBox)

  ReactDOM.unmountComponentAtNode(div)
})