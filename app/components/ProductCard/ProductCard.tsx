import React from "react";
import AddtoCart from "../AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddtoCart />
    </div>
  );
};

export default ProductCard;
