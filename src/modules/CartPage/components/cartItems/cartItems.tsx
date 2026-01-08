import classNames from 'classnames';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import styles from './cartItems.module.scss';
import {
  CartItem,
  clearOneItem,
  decrementQuantity,
  incrementQuantity,
} from '../../../../features/CartSlice';
import { IoCloseSharp } from 'react-icons/io5';
import { useAppDispatch } from '../../../../app/hooks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
type Props = {
  products: CartItem[];
};
export const CartItems = ({ products }: Props) => {
  const dispach = useAppDispatch();

  const handleItemClear = id => {
    dispach(clearOneItem(id));
  };

  const handleIncrement = id => {
    dispach(incrementQuantity(id));
  };

  const handleDecrement = id => {
    dispach(decrementQuantity(id));
  };
  const navigate = useNavigate();
const location = useLocation();

const goToDetails = (productId: string, category: string) => {
  navigate(`/${category}/${productId}`, {
    state: { from: location.state?.from || '/cart' },
  });
};
  return (
    <>
      {products.map(product => (
        <div key={product.id} className={styles.cartItem}>
          <div className={styles.cartItem__info}>
            <IoCloseSharp
              className={classNames(styles.cartItem__icon, [
                styles['cartItem__icon--close'],
              ])}
              onClick={() => handleItemClear(product.id)}
            />
           <div
  className={styles.cartItem__link}
  onClick={() => goToDetails(product.itemId, product.category)}
  style={{ cursor: 'pointer' }}
>
  <img src={`./${product.image}`} className={styles.cartItem__image} />
  <p className={styles.cartItem__title}>{product.name}</p>
</div>
          </div>
          <div className={styles.cartItem__quantity}>
            <div className={styles.cartItem__box}>
              <FiMinus
                className={classNames(styles.cartItem__icon, {
                  [styles['cartItem__icon--disabled']]: product.quantity === 1,
                })}
                onClick={() => handleDecrement(product.id)}
              />
              <p className={styles.cartItem__count}>{product.quantity}</p>
              <FiPlus
                className={classNames(styles.cartItem__icon, {
                  [styles['cartItem__icon--disabled']]: product.quantity === 5,
                })}
                onClick={() => handleIncrement(product.id)}
              />
            </div>
            <p className={styles.cartItem__price}>
              ${product.price * product.quantity}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
