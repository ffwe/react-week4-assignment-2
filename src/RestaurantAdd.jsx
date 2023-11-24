// RestaurantAdd.jsx
import React, { useState } from 'react';

const RestaurantAdd = ({ onAddRestaurant }) => {
  const [newRestaurantName, setNewRestaurantName] = useState('');
  const [newRestaurantCategory, setNewRestaurantCategory] = useState('');
  const [newRestaurantAddress, setNewRestaurantAddress] = useState('');

  const handleAddButtonClick = () => {
    const restaurant = {
      name: newRestaurantName,
      category: newRestaurantCategory,
      address: newRestaurantAddress,
    };
    onAddRestaurant(restaurant);
    setNewRestaurantName('');
    setNewRestaurantCategory('');
    setNewRestaurantAddress('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={newRestaurantName}
        onChange={(e) => setNewRestaurantName(e.target.value)}
      />
      <input
        type="text"
        placeholder="분류"
        value={newRestaurantCategory}
        onChange={(e) => setNewRestaurantCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="주소"
        value={newRestaurantAddress}
        onChange={(e) => setNewRestaurantAddress(e.target.value)}
      />
      <button type="submit" onClick={handleAddButtonClick}>등록</button>
    </div>
  );
};

export default RestaurantAdd;
