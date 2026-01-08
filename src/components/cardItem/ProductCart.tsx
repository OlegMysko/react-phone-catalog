import styles from './ProductCart.module.scss';
import { Product } from '../../types/products';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { Buttons } from '../buttons/Buttons';
type Props = {
  products: Product[];
  types?: 'hot' | 'new' | 'grid';
};

export const ProductCart = ({ products, types }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!products) {
    return null;
  }

  const goToDetails = (productId: string, category: string) => {
    const currentPath = location.pathname;
    let from = location.state?.from;

    if (!from) {
      from = currentPath === '/' ? '/' : `/${category}`;
    }

    navigate(`/${category}/${productId}`, { state: { from } });
  };

  return (
    <>
      {products.map(product => (
        <div
          className={classNames(styles.card, {
            [styles['card--grid']]: types === 'grid',
          })}
          key={product.id}
        >
          <div
            className={styles.card__link}
            onClick={() =>
              goToDetails(product.itemId || product.id, product.category)}
            style={{ cursor: 'pointer' }}>
            <img className={styles.card__image} src={`./${product.image}`} />
            <h4 className={styles.card__name}>{product.name}</h4>
          </div>

          {types === 'new' && (
            <span className={styles.card__fullprice}>${product.fullPrice}</span>
          )}
          {types !== 'new' && (
            <>
              <span className={styles.card__fullprice}>${product.price}</span>
              <span className={styles.card__price}>${product.fullPrice}</span>
            </>
          )}
          <div className={styles.card__border}></div>

          <div className={styles.card__info}>
            <div className={styles.card__screen}>
              <span className={styles.card__characteristics}>Screen</span>
              <span className={styles.card__goods}>{product.screen}</span>
            </div>
            <div className={styles.card__screen}>
              <span className={styles.card__characteristics}>Capacity</span>
              <span className={styles.card__goods}>{product.capacity}</span>
            </div>
            <div className={styles.card__screen}>
              <span className={styles.card__characteristics}>RAM</span>
              <span className={styles.card__goods}>{product.ram}</span>
            </div>
          </div>
          <Buttons type={'small'} product={product} />
        </div>
      ))}
    </>
  );
};
