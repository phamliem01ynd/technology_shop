import React, { useContext, useEffect, useState } from "react";
import Logo from "../logo";
import { Row, Col, Input, Button, Badge } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FaRegUserCircle, FaCartPlus } from "react-icons/fa";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/auth.usecontext";
import { useDispatch, useSelector } from "react-redux";
import { Keysearch } from "../redux/action";
import ThemeToggle from "../../components/Theme/theme";
const Header = () => {
  const placeholders = ["laptop", "phone", "watch", "electronic", "speaker"];

  const navigate = useNavigate();
  const { auth, setAuth } = useContext(authContext);
  const cart = useSelector((state) => state.cart);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const [placeholder, setPlaceholder] = useState(placeholders[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length;
      setPlaceholder(placeholders[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const totalProduct = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const handleSearch = (e) => {
    const keySearch = e.target.value;
    setSearch(keySearch);
  };

  const handleClickSearch = () => {
    dispatch(Keysearch(search));
  };
  return (
    <header>
      <Row justify="space-between" align={"middle"}>
        <Col style={{ padding: "0px 24px " }}>
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col md={5} xs={0}>
          <div className="search">
            <Input
              className="search-input"
              placeholder={`Tìm kiếm: "${placeholder}"`}
              onChange={handleSearch}
            />
            <div className="search__icon">
              <SearchOutlined onClick={handleClickSearch} />
            </div>
          </div>
        </Col>
        <Col style={{ padding: "0px 24px " }}>
          <div className="header__left">
          <ThemeToggle />
            <div className="header__left__icon1">
              {auth.isAuthenticated ? <FaRegUserCircle /> : <></>}
              <div className="title">{auth?.user?.name}</div>
            </div>
            <div>
              {auth.isAuthenticated ? (
                <Badge count={totalProduct} size="small">
                  <div className="header__left__icon2">
                    <Link to="cart" style={{ color: "black" }}>
                      <FaCartPlus />
                    </Link>
                  </div>
                </Badge>
              ) : (
                <></>
              )}
            </div>
            <div>
              {!auth.isAuthenticated ? (
                <Button>
                  <Link to={"/login"}>
                    <p>Đăng nhập</p>
                  </Link>
                </Button>
              ) : (
                <></>
              )}
            </div>
            <div>
              {!auth.isAuthenticated ? (
                <Button>
                  <Link to={"/register"}>
                    <p>Đăng ký</p>
                  </Link>
                </Button>
              ) : (
                <>
                  <span
                    onClick={() => {
                      localStorage.clear("access_token");
                      setAuth({
                        isAuthenticated: false,
                        user: {
                          email: "",
                          name: "",
                        },
                      });
                      navigate("/");
                    }}
                  >
                    <p
                      style={{
                        cursor: "pointer",
                        background: "#000",
                        color: "#fff",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                      className="logout"
                    >
                      Đăng xuất
                    </p>
                  </span>
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
