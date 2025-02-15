import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, message } from 'antd';
import { deleteAll, deleteToCart, reduceToCart, updateToCart } from '../../components/redux/action';
import './cart.scss'
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Thêm useDispatch()

  console.log("Cart state:", cart);

  if (!cart) {
    return <p>Đang tải...</p>; 
  }

  const handleIncrease = (item) => {
    dispatch(updateToCart(item.id));
  };

  const handleReduce = (item) => {
    if(item.quantity > 1){
      dispatch(reduceToCart(item.id))
    }
  };

  const handleDelete = (item) => {
    if (window.confirm('Bạn có chắc muốn xóa hết sản phẩm không?')) {
      dispatch(deleteToCart(item.id));
    }
  };

  const handleDeleteAll = () => {
    if(window.confirm('Bạn có chắc muốn xóa không')){
      dispatch(deleteAll());
    }

  }
  const totalPrice = cart.reduce((total, item) => {
    return total + ((100 - item.product.discount) * item.product.price) * item.quantity;
  }, 0);
  
  const handlePay = () => {
    window.confirm('Bạn có chắc muốn xóa không')
  }

  return (
    <>
      <h2>Giỏ hàng</h2>
      <div className='carttop'>
      <p>
  Tổng tiền: <strong>{totalPrice.toLocaleString()} VND</strong>
</p>

        <div>
          <Button onClick={handleDeleteAll}>Xóa hết</Button>
          <Button onClick={handlePay}>Thanh toán</Button>
        </div>
      </div>
      {cart.length === 0 ? (
        'Giỏ hàng trống'
      ) : (
        cart.map((item) => ( 
          <div className='cart' key={item.id}>
            <div className='cart__image'>
              <img src={item.product.image} alt={item.product.name} />
            </div>
            <div className='cart__detail'>
              <div className='oldPrice'>
                {item.product.price}
              </div>
              <div className='form'>
              <Button onClick={() => handleReduce(item)}>-</Button>
              <Input 
                type='text' 
                style={{width:'50px', height:'auto', textAlign: 'center'}} 
                value={item.quantity} 
                readOnly
              />
              <Button onClick={() => handleIncrease(item)}>+</Button>
              </div>
              <div className='newPrice'>
                {((100 - item.product.discount) * item.product.price) * item.quantity}
              </div>
            </div>
            <div className='cart__delete'>
              <Button onClick={() => handleDelete(item)}>Xóa</Button>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Cart;
