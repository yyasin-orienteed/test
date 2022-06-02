import React from "react";
import "./Button.css";
const index = (props) => {
  const { priority, children, ...rest } = props;
  return (
    <>
      <button className={priority} {...rest}>
        {children}
      </button>
    </>
  );
};

export default index;
