import { useContext } from 'react';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/userContext';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  // const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card m-4 p-2 w-[230px] h-[350px] bg-gray-300 rounded-lg flex flex-col justify-between">
      <img
        className="res-logo rounded-md object-cover w-full h-[150px]"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold py-1">{name}</h3>
      <h3 className="text-sm text-gray-600">{cuisines.join(', ')}</h3>
      <h3>{avgRating} stars</h3>
      {/* <h3 className="font-bold">User: {loggedInUser}</h3> */}
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
