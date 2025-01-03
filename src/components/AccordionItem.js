import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const AccordionItem = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-gray-100 text-left border-b-4 flex justify-between"
        >
          <div className="my-3 w-9/12">
            <span className="">{item.card.info.name}</span>
            <span>
              - Rs
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-6    ">
            <div className="absolute">
              <button
                onClick={() => handleAddItem(item)}
                className="bg-gray-500 text-white shadow-lg px-1 rounded-lg"
              >
                Add+
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItem;
