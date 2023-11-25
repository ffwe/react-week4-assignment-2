// RestaurantList.test.js
import { render, screen } from '@testing-library/react';
import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  it('renders a list of restaurants', () => {
    // Arrange
    const restaurants = [
      {
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      },
      {
        id: 3,
        name: '키와미',
        category: '일식',
        address: '분당구 정자동',
      },
    ];

    // Act
    render(<RestaurantList restaurants={restaurants} />);

    // Assert
    const restaurantList = screen.getByRole('list');
    expect(restaurantList).toBeInTheDocument();

    const restaurantElements = screen.getAllByRole('listitem');
    expect(restaurantElements).toHaveLength(restaurants.length);

    restaurants.forEach((restaurant, index) => {
      const { name, category, address } = restaurant;
      const [createdName, createdCategory, createdAddress] = restaurantElements[index].textContent.split(' | ');

      expect(createdName.trim()).toBe(name);
      expect(createdCategory.trim()).toBe(category);
      expect(createdAddress.trim()).toBe(address);
    });
    // Additional assertions as needed
  });

  // Add more test cases for edge cases or specific scenarios
});
