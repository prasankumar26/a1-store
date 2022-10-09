import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { getProductCategories } from '../features/products/ProductSlice';



const Category = () => {

  const {categories} = useSelector((state) => state.product)
  const dispatch = useDispatch()

    useEffect(() =>{
       dispatch(getProductCategories())
    }, [getProductCategories])  

  return (
   <>
   <Wrapper>
    <div className="category-btn-group">
        {
      categories.map((category, index) =>{
        return <div className="category-group" key={index}>
          <button className="cat-btn">{category}</button>
        </div>
      })
     }
    </div>
    </Wrapper>
   </>
  )
}

export default Category


const Wrapper = styled.section`
  .cat-btn{
    width: 200px !important;
    border: none;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 5px;
    color: #fff;
  }
  .category-btn-group{
    display: flex;
    flex-wrap: wrap;
  }
`