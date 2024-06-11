import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Form from '../src/assets/components/reservations/bookingpage'
import App from '../src/App'


// describe("Booking Form", () => {
//   //   render(<BrowserRouter><App><Form /></App></BrowserRouter>);
//   //   const headingElement = screen.getByText("Make Your reservation");
//   // expect(headingElement).toBeInTheDocument();
  
//   render(<BrowserRouter><App><Form /></App></BrowserRouter>);
//   const headingElement = screen.getByid("make");
//   it('should be equal to 2', () => {
//     expect(1+1).toEqual(2)
//   })
// });

// describe("Register component", () => {
//   it("should render Register component correctly", () => {
//     render(<Register />);
//     const element = screen.getByRole("heading");
//     expect(element).toBeInTheDocument();
//   });
// });

// test("Booking Form", () => {
//   // render the App component
//   render(<Form />); 
//   const headingElement = screen.getByText("Make Your reservation");
//   expect(headingElement).toBeInTheDocument();
// });



// test('Renders the Header heading', () => {
//   render(<BrowserRouter><App /></BrowserRouter>);
//   const headingElement = screen.getByText("Make Your reservation");
//   expect(headingElement).toBeInTheDocument();

//   const reserveButton = screen.getByRole("button");
//   fireEvent.click(reserveButton);

//   const headingElementNew = screen.getByText("Choose Date");
//   expect(headingElementNew).toBeInTheDocument();
// })

// test('Initialize/Update Times', () => {
// render(<BrowserRouter><App /></BrowserRouter>);
// const reserveButton = screen.getByRole("button");
// fireEvent.click(reserveButton);

// const testTime = []
// // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
// // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);


// })