import React, { useContext, useState } from "react";
import { Col, Dropdown, Row } from "antd";
import { Link } from "react-router-dom";
import { categoryContext } from "../../components/context/categoryContext";
import { productContext } from "../../components/context/productContext";
import Product1 from "../../components/product/product1";
import "./shop.scss";
import { productAll } from "../../components/redux/action";
function Shop() {
  const { category} = useContext(categoryContext);
  const { product } = useContext(productContext);
  const [selectCategory, setSelectCategory] = useState(null);
  const [sortType, setSortType] = useState(null);
  const handleCategoryClick = (id) => {
    setSelectCategory(id);
  };
  const handleSelectAll = () => {
    setSelectCategory(null);	
  };
  const filterCategory = selectCategory
    ? product.filter((item) => item.category_id === selectCategory)
    : product;
  const filterSort = [...filterCategory].sort((a, b) => {
    if (sortType === "price-asc") {
      return (
        ((100 - a.discount) / 100) * a.price -
        ((100 - b.discount) / 100) * b.price
      );
    }
    if (sortType === "price-desc") {
      return (
        ((100 - b.discount) / 100) * b.price -
        ((100 - a.discount) / 100) * a.price
      );
    }
    return 0;
  });
  return (
    <>
      <div style={{ margin: "20px 0px 20px 20px" }}>
        <Link to="/" style={{ color: "black", fontWeight: "500" }}>
          Home{" "}
        </Link>
        / Sản phẩm
      </div>
      <div className="shop">
        <Row justify={"center"} gutter={[24, 24]}>
          <Col xxl={6} xl={6}>
            <div className="shop__category">
              <h2 style={{ textAlign: "center" }}>danh mục sản phẩm</h2>
              <div className="categorylist">
                {category
                  ? category.map((item) => (
                      <div
                        className="categoryid"
                        key={item.id}
                        onClick={() => handleCategoryClick(item.id)}
                      >
                        {item.name}
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className="shop__title">
              <h2>Lọc sản phẩm</h2>
              <p onClick={handleSelectAll}>Tất cả sản phẩm</p>
              <div className="filter">
                <Dropdown
                  trigger={["click"]}
                  overlay={
                    <div
                      className="dropdown-menu"
                      style={{
                        background: "#fff",
                        cursor: "pointer",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      <p onClick={() => setSortType("price-asc")}>
                        Giá thấp đến cao
                      </p>
                      <p onClick={() => setSortType("price-desc")}>
                        Giá cao đến thấp
                      </p>
                    </div>
                  }
                >
                  <p>Sắp xếp sản phẩm</p>
                </Dropdown>
              </div>
            </div>
          </Col>
          <Col xxl={18} xl={18}>
            <div className="shop__detail">
              <div className="image">
                <img src="images/carousel/macbook.jpg" alt="img" />
              </div>
              <div className="productShow">
                <Product1 product={filterSort} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Shop;
