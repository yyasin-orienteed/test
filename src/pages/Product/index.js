import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from '../../components/common';

import { getProductBySku } from '../../data/actions/products';
import { addToCart } from '../../data/actions/cart';
import Button from '../../components/common/Button';
import './Product.css';
const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.Products.product);
  const cart = useSelector(state => state.cart);
  const [formData, setFormData] = useState({
    color: null,
    qty: null,
    size: null,
  });

  useEffect(() => {
    dispatch(getProductBySku(params?.sku));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isDisabled = !formData.color || !formData.qty || !formData.size;

  const addToCartClick = () => {
    dispatch(addToCart(cart, { ...product, ...formData }));
  };
  return (
    <Container>
      <div className='productWrapp'>
        <div className='carouselWrapper'>
          <Carousel>
            {product?.images.map(({ url }) => (
              <div>
                <img src={url} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='content'>
          <h3 className='nameText'>{product?.name}</h3>
          <h5 className='price'>{`${product?.price} ${product?.currency}`}</h5>
          <div className='dataContent'>
            <span className='dataName'>
              Availability :{' '}
              <span className='dataValue'>{product?.stockLevelStatus}</span>
            </span>
            <span className='dataName'>
              Product Code : <span className='dataValue'>{product?.sku}</span>
            </span>
            <span className='dataName'>
              tags :{' '}
              <span className='dataValue'>{product?.tags.join(', ')}</span>
            </span>
          </div>
          <p className='descText'>{product?.discription}</p>
          <ul className='featuresList'>
            {product?.features?.map(ele => (
              <li key={ele}>{ele}</li>
            ))}
          </ul>
          <div className='inputsContent'>
            <div className='inputWrapper customSelect'>
              <h3>COLOR</h3>
              <select
                onChange={handleChange}
                value={formData.color}
                name='color'
              >
                <option value={null}>Select Color</option>
                {product?.color.map(ele => (
                  <option value={ele} key={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <div className='inputWrapper customSelect'>
              <h3>SIZE</h3>
              <select onChange={handleChange} value={formData.size} name='size'>
                <option value={null}>Select Size</option>
                {product?.size.map(ele => (
                  <option value={ele} key={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <div className='inputWrapper qtyInput'>
              <h3>QTY</h3>
              <input
                type='number'
                name='qty'
                value={formData.qty}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='actionsWrapper'>
            <div>
              <Button
                disabled={isDisabled}
                onClick={addToCartClick}
                priority='medium'
              >
                Add to cart
              </Button>
            </div>
            <div>
              <Button priority='high'>
                <div>
                  <img src='/images/wishList.svg' />
                  <span> Add to Wishlist</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
