import React, { useState, useEffect } from 'react';
import Category from '../../components/product/category';
import { Carousel, Row, Col, Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom';
import './homePage.scss';
import { getProduct } from '../../utils/api';
import Product from '../../components/product/product';
import { IoRocketOutline, IoWalletOutline  } from "react-icons/io5";
import { MdOutlineChangeCircle } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiGift } from "react-icons/ci";
import Confetti from "react-confetti";

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [products, setProducts] = useState([]);
  const [sold, setSold] = useState(null);
  const [discount, setDiscount] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("showConfetti") === "true") {
      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
        localStorage.removeItem("showConfetti");
      }, 10000);
    }
  }, []);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProduct();
      setProducts(result);
      if (result.length > 0) {
        setSold(result[0].sold);
        setDiscount(result[0].sold); // Lấy category_id từ sản phẩm đầu tiên
      }
    };
    fetchApi();
  }, []);

  const filteredProductSold = sold 
    ? products.filter(product => product.sold >= 25)
    : products;

    const filteredProductDiscount = discount 
    ? products.filter(product => product.discount >= 20)
    : products;

  return (
    <>
    {showConfetti && <Confetti />}
      <div className='menu'>
        <Row justify={'space-between'} align={'middle'}>
          <Col xxl={4} xl={4} lg={4}>
            <Link to='/'>
              <p>Home</p>
            </Link>
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <Link to='shop'>
              <p>Shop</p>
            </Link>
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <Link to='/'>
              <p>Favorite</p>
            </Link>
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <Link to='blog'>
              <p>Blog</p>
            </Link>
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <Link to='about'>
              <p>About</p>
            </Link>
          </Col>
        </Row>
      </div>
      <div className='Content1'>
        <Category />
        <Row>
          <Col span={24}> 
            <Carousel arrows autoplay autoplaySpeed={2000}>
              <div className='Content1__image'>
                <img src='images/carousel/iphone.webp' alt='carousel' />
              </div>
              <div className='image'>
                <img src='images/carousel/iphone2.png' alt='carousel' />
              </div>
              <div className='image'>
                <img src='images/carousel/macbook.jpg' alt='carousel' />
              </div>
              <div className='image'>
                <img src='images/carousel/macbook2.jpg' alt='carousel' />
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
      <div className='Content2'>
        <div className='Content2__Product'>
          <div className='productTitle'>
            Sản phẩm
          </div>
          <Product products={products} />
        </div>
        <div className='Content2__Sale'>
          <div className='productTitle'>
            Sản phẩm bán chạy
          </div>
          <Product products={filteredProductSold}/>
        </div>
        <div className='Content2__supperDiscount'>
          <div className='productTitle'>
            Siêu sale cuối năm
          </div>
          <Product products={filteredProductDiscount}/>
        </div>
      </div>
      <div className='Content3'>
        <div className='Content3__image'>
            <img src='images/carousel/macbook.jpg' alt='macbook'/>
        </div>
        <div className='Content3__content'>
          <div className='title1'>
            Đăng ký với EnndmeShop ngay!
          </div>
          <div className='title2'>
            Tận hưởng dịch vụ mua sắm an toàn, tiện lợi, nhanh chóng 
            cùng với nhiều dịch vụ khác áp dụng cho toàn bộ đối tượng.
            Đến với chúng tôi để tìm được sản phẩm công nghệ phù hợp với
            bản thân và gia đinh...
          </div>
          <div className='form'>
            <Input placeholder='Địa chỉ email'/>
            <Button>Gửi</Button>
          </div>
          <div>
            <div className='contact'>
              <img src='images/carousel/appstore.png' alt='appstore'/>
            </div>
          </div>
        </div>
      </div>
      <div className='Content4'>
        <div className='Content4__block'>
          <div className='Content4__detail'>
          <div className='icon'><IoRocketOutline /></div>
            <div className='title'>
              <h3>Giao hàng miễn phí</h3>
              <p>Dành cho các đơn hàng trên 10 triệu</p>
            </div>
          </div>
          <div className='Content4__detail'>
          <div className='icon'><MdOutlineChangeCircle /></div>
          <div className='title'>
            <h3>Đổi trả 30 ngày</h3>
            <p>Nếu sản phẩm có vấn đề</p>
          </div>
          </div>
          <div className='Content4__detail'>
          <div className='icon'><IoWalletOutline /></div>
          <div className='title'>
            <h3>Thanh toán an toàn</h3>
            <p>Tích hợp các phương thức thanh toán mới nhất</p>
          </div>
          </div>
          <div className='Content4__detail'>
          <div className='icon'><IoIosPhonePortrait /></div>
          <div className='title'>
            <h3>Hỗ trợ 24/7</h3>
            <p>Đường dây nóng (+84)987465321</p>
          </div>
          </div>
          <div className='Content4__detail'>
          <div className='icon'><CiGift /></div>
          <div className='title'>
            <h3>Dịch vụ quà tặng</h3>
            <p>Hỗ trợ nhiều voucher giảm giá sốc</p>
          </div>
          </div>
        </div>     
      </div>
      <div className='Content5'>
        <h2>Liên hệ</h2>
        <Form>
          <div className='contact'>
            <div className='information'>
              <div className='name'><Input placeholder='Họ tên'/></div>
              <div><Input placeholder='Email'/></div>
            </div>
            <div className='title'>
              <Input placeholder='Tiêu đề' className='title1'/>
              <Input placeholder='Nội dung tin nhắn'/>
            </div>
          </div>
          <Button>Gửi</Button>
        </Form>
      </div>
    </>
  );
};

export default HomePage;






