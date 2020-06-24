import React from "react";
import { v4 as uuid } from "uuid";

const ProductItem = (props) => {
  const { productName, icon, price, inventory } = props.info;
  const id = uuid();
  return (
    <li key={id}>
      {productName} <i>{icon}</i>
      <h5>{price}</h5>
      <button
        disabled={inventory === 0}
        onClick={() => props.add({ ...props.info, id })}
      >
        {inventory > 0 ? "Add to cart" : "Sold out"}
      </button>
    </li>
  );
};

export default ProductItem;
