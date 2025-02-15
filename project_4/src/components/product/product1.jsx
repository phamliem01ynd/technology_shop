import React, { useState } from "react";
import { Row, Col, Button, message } from "antd";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../redux/action";
const Product1 = (props) => {
  const { product } = props;
  const [currentIndex, setCurrentIndex] = useState(16);
  const handleSeeMore = () => {
    setCurrentIndex(product.length);
  };
  const keySearch = useSelector((state) => state.search);
  const filterKeySearch = keySearch.length
    ? product.filter((item) =>
        keySearch.some((itemSearch) =>
          item.name.toLowerCase().includes(itemSearch.payload.toLowerCase())
        )
      )
    : product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleAddToCart = (item) => {
    if (cart.some((itemcart) => itemcart.id === item.id)) {
      message.warning(`${item.name} đã có trong giỏ hàng`);
      return;
    }
    dispatch(addtocart(item.id, item));
    message.success(`${item.name} đã được thêm vào giỏ hàng thành công`);
  };
  return (
    <>
      <div className="product">
        <Row justify={"center"} align={"middle"} gutter={[16, 16]}>
          {filterKeySearch.slice(0, currentIndex).map((item) => (
            <Col key={item.id} xxl={6} xl={6} lg={8} md={8} sm={12} xs={12}>
              <div className="product__list">
                <div className="product__image">
                  <Link to={"/product/" + item?.name}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className="product__title">
                  <div className="name">{item.name}</div>
                  <div className="quantity">Số lượng: {item.quantity}</div>
                  <div className="product__price">
                    <div className="oldprice">
                      {item.price} <div>VND</div>
                    </div>
                    <div className="newprice">
                      {((100 - item.discount) / 100) * item.price}
                      <div>VND</div>
                    </div>
                  </div>
                  <Button onClick={() => handleAddToCart(item)}>
                    Thêm giỏ hàng
                  </Button>
                </div>
                <div className="icon">
                  <div className="icon1">
                    <FaRegEye />
                  </div>
                  <div className="icon2">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Button className="see-more" onClick={handleSeeMore}>
          Xem Thêm
        </Button>
      </div>
    </>
  );
};

export default Product1;
