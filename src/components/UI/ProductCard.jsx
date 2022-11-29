import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispath = useDispatch();
  const addToCart = () => {
    dispath(
      CartActions.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );
    toast.success("add to cart succes");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <motion.div whileHover={{ scale: 1.02 }} className="product__item">
        <div className="product__img">
          <Link to={`/shop/${item.id}`}>
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </Link>
        </div>
        <div className="p-2 product__info">
          <h2 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h2>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-shopping-cart-2-fill"></i>
          </motion.span>
        </div>
      </motion.div>
    </Col>
  );
};

export default ProductCard;
