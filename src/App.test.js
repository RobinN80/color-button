import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('renders learn react link', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App/>);
  //check that button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox is checked', () => {
  render(<App/>);
  // check if checbox is checked
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).not.toBeDisabled();
});

test('clicked disabled button has gray background and reverts blue', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  //change button to blue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue')
});

describe('spaces before camel-case capital letters', () =>{
  test('Words for no inner capital letters',() => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Words for one inner capital letters',() => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Words for multiple inner capital letters',() => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})
