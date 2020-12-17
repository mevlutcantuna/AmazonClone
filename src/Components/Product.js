import React from "react";
import "../Style/Product.scss";

import { useDispatch } from "react-redux";

function Product(props) {
  const { title, image, id, rating, price } = props;

  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__info__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__info__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="product_image" />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            data: {
              id: id,
              title: title,
              image: image,
              rating: rating,
              price: price,
            },
            price:price,
          })
        }
        className="product__button"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
