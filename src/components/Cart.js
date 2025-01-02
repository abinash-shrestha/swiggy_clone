import { useDispatch, useSelector } from 'react-redux';
import AccordionItem from './AccordionItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());
  return (
    <div className="text-center my-2 mx-4">
      <h1 className="text-3xl font-bold">CART</h1>
      <button
        className="bg-black text-white p-2 m-2 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1>Your Cart is Empty, Please Add Some Items</h1>
      )}
      <div className="w-6/12 m-auto">
        <AccordionItem items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
