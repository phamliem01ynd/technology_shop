import React, { useContext, useState } from "react";
import {
  Row,
  Col,
  Button,
  notification,
  Descriptions,
  message,
  Modal,
  Rate,
} from "antd";
import { Link } from "react-router-dom";
import "./product.scss";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, updateToCart } from "../redux/action";
import { categoryContext } from "../context/categoryContext";
function Product(props) {
  const { products } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const { category, setCategory } = useContext(categoryContext);
  const itemsPerPage = 4;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const keySearch = useSelector((state) => state.search);
  const [open, setOpen] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleAddToCart = (item) => {
    if (cart.some((itemcart) => itemcart.id === item.id)) {
      message.warning(`${item.name} đã có trong giỏ hàng`);
      return;
    }
    dispatch(addtocart(item.id, item));
    message.success(`${item.name} đã được thêm vào giỏ hàng thành công`);
  };
  const handleNext = () => {
    if (isAnimating) return; 
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + itemsPerPage) % products.length
      );
      setIsAnimating(false);
    }, 500); 
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - itemsPerPage + products.length) % products.length
      );
      setIsAnimating(false);
    }, 500);
  };

  const handleShowModal = (item) => {
    setOpen(true);
    setProductDetail(item.id);
  };

  const searchFilter = keySearch.length
    ? products.filter((item) =>
        keySearch.some((searchItem) =>
          item.name.toLowerCase().includes(searchItem.payload.toLowerCase())
        )
      )
    : products;

  const filterProductDetail = productDetail
    ? products.find((item) => item.id === productDetail)
    : products;
  const handleOK = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const filterProductCategory = filterProductDetail
    ? category.find((item) => item.id === filterProductDetail.category_id)
    : filterProductDetail;
  return (
    <>
      <Modal
        open={open}
        title="Chi tiết sản phẩm"
        onOk={handleOK}
        onCancel={handleCancel}
      >
        {filterProductDetail ? (
          <div className="productDetail">
            <div className="productDetail__image">
              <img
                src={filterProductDetail.image}
                alt={filterProductDetail.name}
              />
              <div className="productDetail__name">
                {filterProductDetail.name}
              </div>
            </div>
            <div className="productDetail__about">
              <div className="productDetail__type">
                Xu hướng sản phẩm: Sản phẩm bán chạy
              </div>
              <div className="productDetail__cate">
                Loại sản phẩm :{" "}
                {filterProductCategory
                  ? filterProductCategory.name
                  : "Loading category..."}
              </div>
              <div className="productDetail__oldprice">
                Giá cũ: {filterProductDetail.price} đ
              </div>
              <div className="productDetail__discount">
                Giảm giá: {filterProductDetail.discount} %
              </div>
              <div className="productDetail__newprice">
                Giá mới:{" "}
                {((100 - filterProductDetail.discount) / 100) *
                  filterProductDetail.price}{" "}
                đ
              </div>
              <div className="productDetail__des">
                Mô tả: {filterProductDetail.description}
              </div>
              <div>
                Đánh giá: <Rate allowHalf={true} defaultValue={4.5} />
              </div>
            </div>
          </div>
        ) : (
          <p>Không tìm thấy sản phẩm</p>
        )}
      </Modal>
      <div className={`product ${isAnimating ? "exiting" : ""}`}>
        <Button className="scroll-button left" onClick={handlePrev}>
          <FaArrowCircleLeft />
        </Button>
        <Row justify={"center"} align={"middle"} gutter={[16, 16]}>
          {searchFilter
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((item) => (
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
                    <div
                      className="icon1"
                      onClick={() => handleShowModal(item)}
                    >
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
        <Button className="scroll-button right" onClick={handleNext}>
          <FaArrowCircleRight />
        </Button>
      </div>
    </>
  );
}

export default Product;
