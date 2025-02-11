/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';


/**
* Verify something should render
*/
test('App should render', () => {
 render(<App />);


 expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});


test('Button should render', () => {
 // TODO: change the expect to actually test something 😉
 render(<App />)


 const buttonElement = screen.getByText(/Current theme:/)
 expect(buttonElement).toBeInTheDocument();
});


/**
* Verify clicking button should change theme
* hint: use fireEvent.click(element) to trigger a click event on an element
*/
test('theme button should update button text', () => {
 render(<App />)
 const buttonElement = screen.getByText(/Current theme:/)
 expect(buttonElement).toHaveTextContent('Current theme: light');


 fireEvent.click(buttonElement);
 expect(buttonElement).toHaveTextContent('Current theme: dark')
});




// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
 // TODO: change the expect to actually test something 😉
 render(<App />)
 //changes color of body/background, not button
 const body = document.body
 //make sure it has the light theme
 expect(body).toHaveStyle('color: #333')
 //get the theme button
 const buttonElement = screen.getByText("Current theme: light")
 //simulate click to change theme
 fireEvent.click(buttonElement);
 //check if theme color is changed to dark
 expect(body).toHaveStyle('color: #FFF')
});


/**
* Verify clicking button should toggle hidden content
*
* hint: you can check if something does not exist by using .not
* e.g. expect(element).not.toBeInTheDocument()
*
* hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
* (getByText will throw an error if it is not rendered)
*/
test('hidden button should toggle hidden content', () => {
 // TODO: change the expect to actually test something 😉
 render(<App />)
 //get the button
 const buttonElement = screen.getByText(/Show hidden content/)
 expect(buttonElement).toHaveTextContent("Show hidden content")


 fireEvent.click(buttonElement)


 const hiddenElement = screen.getByText(/this content is hidden by default/)
  expect(hiddenElement).toBeInTheDocument();
 expect(buttonElement).toHaveTextContent("Hide hidden content")


});




/**
* Want more? Try these:
*   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
*   - check the for the class name .container on the surrounding div;
*   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
*/



