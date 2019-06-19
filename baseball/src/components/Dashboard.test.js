import React from 'react';
import { render } from '@testing-library/react';
// automatically unmount and clean up DOM after each test is finished
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard.js';
import Display from './Display.js';
// import { onStrike, onBall, onFoul, onHit } from '../App.js'


// tests are passing for finding text, not for doing the work...
describe('<Dashboard />', () => {
      it('should render without errors', () => {
            render(<Dashboard />)
      });

      describe('buttons', () => {
            it('should increment and decrement as expected', () => {
                  const { container } = render(<Dashboard />)
                  // console.log(container)
                  const buttons = container.querySelectorAll('button')

                  expect(buttons[0].textContent).toBe('Strike')
                  expect(buttons[1].textContent).toBe('Ball')
                  expect(buttons[2].textContent).toBe('Foul')
                  expect(buttons[3].textContent).toBe('Hit')

                  // const { display } = render(<Display />)
                  // console.log(display)

                  // const result = display.selectById('balls')
                  // expect(result.textContent).toBe('balls: 0')
            })
      })


});