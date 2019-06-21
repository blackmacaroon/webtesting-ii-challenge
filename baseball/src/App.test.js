import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from '@testing-library/react';
import App from "./App";
import Dashboard from './components/Dashboard';
import "@testing-library/react/cleanup-after-each";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // describe('onStrike', () => {
  //   it('should increase by one when ')
  // })
  describe("strike button", () => {
    it("should increase strikes by 1 when clicked if strikes are less than three", () => {
      //find the element on the dashboard with the text strike
      const { getByText } = render(<Dashboard />);
      //call it button
      const button = getByText(/strike/i);
      // when you click it...
      fireEvent.click(button);
      //confirm thing happend:
    });
  });

  describe("ball button", () => {
    it("should increase balls by 1 when clicked if balls are less than four", () => {
      //find the button
      const { getByText } = render(<Dashboard />);
      const button = getByText(/ball/i);
      //click it
      fireEvent.click(button);
      //confirm
      //    how now?
    });
  });

  describe("foul button", () => {
    it("should increase strikes by 1 when clicked", () => {
      //find the button
      const { getByText } = render(<App />);
      const button = getByText(/foul/i);
      //click it
      fireEvent.click(button);
      //confirm
      //    how now?
    });
  });

  describe("hit button", () => {
    it("should reset strikes and balls to zero when clicked", () => {
      //find the button
      const { getByText } = render(<App />);
      const button = getByText(/hit/i);
      //click it
      fireEvent.click(button);
      //confirm
      getByText(/balls: 0/i);
      getByText(/strikes: 0/i);
    });
  });

  describe('buttons', () => {
    it('should pull buttons from dashboard component and display them with the right text in the right order', () => {
       const { container } = render(<App />)
      //  console.log(container)
       const buttons = container.querySelectorAll('button')

       expect(buttons[0].textContent).toBe('Strike')
       expect(buttons[1].textContent).toBe('Ball')
       expect(buttons[2].textContent).toBe('Foul')
       expect(buttons[3].textContent).toBe('Hit')
    })
  })


});
