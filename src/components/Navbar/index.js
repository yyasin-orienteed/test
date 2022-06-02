import { useEffect } from "react";
import Button from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../data/actions/cart";
import "./Navbar.css";
const Index = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const numberItems = () => {
    let qtyNumber = 0;
    cart?.map(({ qty }) => (qtyNumber += parseInt(qty)));
    return qtyNumber;
  };

  return (
    <nav className="nav">
      <div className="logoContainer">
        <span className="logo">BONFIRE</span>
        <div className="cart">
          <Button priority="high">CART({numberItems()})</Button>
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>{" "}
          </div>
        </div>
      </div>
      <div className="navContainer">
        <div>
          <ul className="navList">
            <li className="navItem">
              <a>home</a>
            </li>
            <li className="navItem">
              <a>men</a>
            </li>
            <li className="navItem">
              <a>women</a>
            </li>
            <li className="navItem">
              <a>lookbook</a>
            </li>
            <li className="navItem">
              <a>about</a>
            </li>
            <li className="navItem">
              <a>blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
