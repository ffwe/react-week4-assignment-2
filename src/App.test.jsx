// App.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component with initial state', () => {
    // Arrange
    render(<App />);

    // Act
    const headingElement = screen.getByText('Restaurants');

    // Assert
    expect(headingElement).toBeInTheDocument();

    // Add more assertions for the initial state if needed
  });

  it('adds a new restaurant when RestaurantAdd component is used', () => {
    // Arrange
    render(<App />);

    // Act
    const restaurantNameInput = screen.getByPlaceholderText('이름');
    const restaurantCategoryInput = screen.getByPlaceholderText('분류');
    const restaurantAddressInput = screen.getByPlaceholderText('주소');
    const addButton = screen.getByText('등록');

    fireEvent.change(restaurantNameInput, { target: { value: '마녀주방' } });
    fireEvent.change(restaurantCategoryInput, { target: { value: '한식' } });
    fireEvent.change(restaurantAddressInput, { target: { value: '서울시 강남구' } });
    fireEvent.click(addButton);

    // Assert
    const addedRestaurantElement = screen.getByText('마녀주방 | 한식 | 서울시 강남구');
    expect(addedRestaurantElement).toBeInTheDocument();

    // Add more assertions as needed
  });

  // Add more test cases as needed
});
