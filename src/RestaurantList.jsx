// RestaurantList.jsx
import React from 'react';

const RestaurantList = ({ restaurants }) => {
  const splitText = ' | ';
  const restaurantList = restaurants.map((r) => (
    <li key={r.id}>
      {r.name}
      {splitText}
      {r.category}
      {splitText}
      {r.address}
    </li>
  ));
  return (
    <ul>
      {restaurantList}
    </ul>
  );
};

export default RestaurantList;
