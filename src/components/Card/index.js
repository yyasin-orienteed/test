import React from "react";
import { useNavigate } from "react-router-dom";

import './Card.css'
import Button from "../../components/common/Button";
const Index = ({ item }) => {
  const navigate = useNavigate();
  const goToProduct = (sku) => navigate(`/product/${sku}`);
  return (
    <div>
      <div key={item.sku} className="productCard">
        <div className="cardContent">
          <div>
            <img className="imgProduct" src={item.mainImage} alt="product page" />
          </div>
          <div>
            <p className="nameText">{item.name}</p>
            <p className="DescText">{item.discription}</p>
            <span className="price">{`${item.price} ${item.currency}`}</span>
            <div className="broductBtn">
              <Button onClick={() => goToProduct(item.sku)} priority="high">
                Ckeck the product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
