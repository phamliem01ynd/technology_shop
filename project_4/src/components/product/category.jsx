import React from 'react'
import { getCategory } from '../../utils/api';
import { useState, useEffect } from 'react';
import {Row, Col} from 'antd';
import "./category.scss";
import { Link } from 'react-router-dom'
const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCategory();
            setCategory(result);
        }
        fetchApi();
    },[])
  return (
    <div className='category'>
      <Row justify={'center'} align={'middle'}>
        {category.map((item) => (
          <Col key={item.id} xxl={2} xl={2} lg={4} md={4} sm={4} xs={6}>
            <div className='category__list'>
              <Link to={'/category/' + item?.name } className='category__image'>
                <img src={item.image} alt={item.name} />
              </Link>
            </div>
            <div className='category__name'>{item.name}</div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Category