import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{avgRating} stars</h3>
      <h3></h3>
    </div>
  );
};

export default RestaurantCard;
