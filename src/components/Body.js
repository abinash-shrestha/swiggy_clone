import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <h3 className="search-bar">Search</h3>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.5
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
