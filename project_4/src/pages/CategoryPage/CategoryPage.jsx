import React from 'react'
import { useParams} from 'react-router-dom'
import Shop from '../Shop/shop';
const CategoryPage = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>{params.categoryName}
        <Shop/> 
    </div>
  )
}

export default CategoryPage 