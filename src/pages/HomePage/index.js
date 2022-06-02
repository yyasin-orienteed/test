import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../data/actions/products";
import Card from "../../components/Card";
import "./HomePage.css";
const Index = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productItems = useMemo(
    () =>
      products?.map((item) => (
        <React.Fragment key={item.sku}>
          <Card item={item} />
        </React.Fragment>
      )),
    [products]
  );

  return (
    <div className="container">
      <div className="header">
        <span className="headerText">Product</span>
      </div>
      <div className="productWrapper">{productItems}</div>
    </div>
  );
};

export default Index;
