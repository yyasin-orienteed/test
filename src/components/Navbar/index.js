import { useEffect, useState } from 'react';
import Button from '../common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../data/actions/cart';
import { Container, Burger } from '../common';
import './Navbar.css';

const linkList = [
  { name: 'home', link: '/' },
  { name: 'men', link: '/' },
  { name: 'women', link: '/' },
  { name: 'lookbook', link: '/' },
  { name: 'about', link: '/' },
  { name: 'blog', link: '/' },
];
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const numberItems = () => {
    let qtyNumber = 0;
    cart?.map(({ qty }) => (qtyNumber += parseInt(qty)));
    return qtyNumber;
  };

  return (
    <nav className='nav'>
      <div
        onClick={() => {
          setVisible(false);
        }}
        className={`fade ${visible ? 'visible' : ''}`}
      ></div>
      <Container>
        <div className='inner-nav'>
          <span className='logo'>BONFIRE</span>
          <div className='cart'>
            <Button priority='high'>CART({numberItems()})</Button>
          </div>
          <button
            class='hamburger-lines'
            onClick={() => {
              setVisible(true);
            }}
          >
            <Burger />
          </button>
        </div>
      </Container>
      <div className='navContainer'>
        <ul className={`navList ${visible ? 'visible' : ''}`}>
          <li className='inner-logo '>
            <a>BONFIRE</a>
          </li>
          {linkList.map(linkItem => (
            <li
              onClick={() => setVisible(false)}
              className='navItem'
              key={linkItem}
            >
              <a>{linkItem.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
