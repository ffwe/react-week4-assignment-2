// RestaurantAdd.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import RestaurantAdd from './RestaurantAdd';

describe('RestaurantAdd', () => {
  it('adds a new restaurant', () => {
    // Arrange
    const onAddRestaurant = jest.fn();

    // Act
    render(<RestaurantAdd onAddRestaurant={onAddRestaurant} />);
    const restaurantNameInput = screen.getByPlaceholderText('이름');
    const restaurantCategoryInput = screen.getByPlaceholderText('분류');
    const restaurantAddressInput = screen.getByPlaceholderText('주소');
    const addButton = screen.getByText('등록');

    // Simulate user input and action
    fireEvent.change(restaurantNameInput, { target: { value: '마녀주방' } });
    fireEvent.change(restaurantCategoryInput, { target: { value: '한식' } });
    fireEvent.change(restaurantAddressInput, { target: { value: '서울시 강남구' } });
    fireEvent.click(addButton);

    // Assert
    expect(onAddRestaurant).toHaveBeenCalledWith('마녀주방 | 한식 | 서울시 강남구');

    // Additional assertions as needed
  });

  // Add more test cases for edge cases or specific scenarios
});
