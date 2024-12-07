import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card m-4 p-2 w-[230px] bg-gray-300 rounded-lg">
      <img className="res-logo rounded-md " src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-1">{name}</h3>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{avgRating} stars</h3>
      <h3></h3>
    </div>
  );
};

export default RestaurantCard;
