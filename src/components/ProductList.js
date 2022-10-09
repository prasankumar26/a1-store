import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/products/ProductSlice'
import styled from 'styled-components';
import Loading from './Loading';
import { AiOutlineStar } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import {Link} from 'react-router-dom';

const ProductList = () => {

    const {products, isLoading, searchTerm} = useSelector((state) => state.product)
    const dispatch = useDispatch()
    
    const [productLimit, setProductLimit] = useState(12)
    console.log(productLimit);


    useEffect(() =>{
     dispatch(getProducts())
    }, [searchTerm, getProducts])

    const loadMore = () =>{
      setProductLimit(productLimit + 4)
    }
    

    // const productCategory = products.map((pcategory) => pcategory.category)
    // console.log('productCategory', [...new Set(productCategory)]);


    
  return (
   <>
   <Wrapper>
  <div className="container my-5">
     <h1 className='text-center'>Our Products</h1>

     
     <div className="row">
      {/* <div className="col-lg-2">
       <Category />
      </div> */}
      <div className="col-lg-12">


{
    isLoading ? <Loading /> : 
    <div className="products-box-main">

    {
        products.slice(0, productLimit).map((product) =>{
           
        const {
            id, 
            title, 
            description, 
            price, 
            discountPercentage, 
            rating, 
            stock,
            brand,
            category,
            thumbnail,
        } = product;

     return <div className="products-box" key={id}>
     <div className="cards">
       <Link to={`/nproducts/${id}`}>
        <div className="image-container">
          <div className="first">
            <div className="d-flex justify-content-between align-items-center">
              <span className="discount">-25%</span>
              <span className="wishlist">
                <BiLike />
              </span>
            </div>
          </div>
          <img
            src={thumbnail}
            className="img-fluid rounded thumbnail-image"
          />
        </div>
       </Link>
        <div className="product-detail-container p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="dress-name">{title}</h5>
            <div className="d-flex flex-column mb-2">
              <span className="new-price"><BiRupee />{price} </span>
            </div>
          </div>
          <div className="product-desc">
            <p>{`${description.substr(1,45)}...`}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center pt-1">
            <div>
              <span className="rating-number"></span>
              <span>{brand}</span> 
            </div>
            <span className="buy"> {category}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center pt-1">
            <div>
              <AiOutlineStar />
              <span className="rating-number">{rating}</span>
            </div>
            <span className="buy">Stock ({stock})</span>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="cards voutchers">
          <div className="voutcher-divider">
            <div className="voutcher-left text-center">
              <span className="voutcher-name">Monday Happy</span>
              <h5 className="voutcher-code">#MONHPY</h5>
            </div>
            <div className="voutcher-right text-center border-left">
              <h5 className="discount-percent">{discountPercentage} %</h5>
              <span className="off">Off</span>
            </div>
          </div>
        </div>
      </div>
 </div>
        })
    }

    
 </div>
}


 

  <div className="p-btn">
     {
    productLimit < products.length &&
     <button className="product-btn" onClick={() => loadMore()}>Load More</button> 
   }

  </div>
   
  


      </div>
     </div>



  </div>

  </Wrapper>
   </>
  )
}

export default ProductList





const Wrapper = styled.section`

.p-btn{
  margin: 0px auto;
  display: block;
  text-align: center;
}

.product-btn{
  margin-top: 30px;
  text-align: center;
  border: none;
  padding: 14px 15px;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card{
	background-color: #fff;
	border:none;
	border-radius: 10px;
	width: 190px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.image-container{

	position: relative;
}

.thumbnail-image{
	border-radius: 10px !important;
}


.discount{

	background-color: red;
	padding-top: 1px;
	padding-bottom: 1px;
	padding-left: 4px;
	padding-right: 4px;
	font-size: 10px;
	border-radius: 6px;
	color: #fff;
}

.wishlist{

	height: 25px;
	width: 25px;
	background-color: #eee;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.first{

	position: absolute;
	width: 100%;
	    padding: 9px;
}


.dress-name{
	font-size: 13px;
	font-weight: bold;
	width: 75%;
}


.new-price{
	font-size: 13px;
	font-weight: bold;
	color: red;
	
}
.old-price{
	font-size: 8px;
	font-weight: bold;
	color: grey;
}


.btn{
	width: 14px;
	height: 14px;
	border-radius: 50%;
	padding: 3px;
}

.creme{
	background-color: #fff;
	border: 2px solid grey;
	

}
.creme:hover {
	border: 3px solid grey;
}

.creme:focus {
	background-color: grey;

}


.red{
	background-color: #fff;
	border: 2px solid red;
	
}


.red:hover {
	border: 3px solid red;
}
.red:focus {
	background-color: red;
}



.blue{
	background-color: #fff;
	border: 2px solid #40C4FF;
}

.blue:hover {
	border: 3px solid #40C4FF;
}
.blue:focus {
	background-color: #40C4FF;
}
.darkblue{
	background-color: #fff;
	border: 2px solid #01579B;
}
.darkblue:hover {
	border: 3px solid #01579B;
}
.darkblue:focus {
	background-color: #01579B;
}
.yellow{
	background-color: #fff;
	border: 2px solid #FFCA28;
}
.yellow:hover {
	border-radius: 3px solid #FFCA28;
}
.yellow:focus {
	background-color: #FFCA28;
}


.item-size{
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background: #fff;
	border: 1px solid grey;
	color: grey;
	font-size: 10px;
	text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
}


.rating-star{
	font-size: 10px !important;
}
.rating-number{
	font-size: 10px;
	color: grey;

}
.buy{
	font-size: 12px;
	color: purple;
	font-weight: 500;
}


.voutchers{
	background-color: #fff;
	border:none;
	border-radius: 10px;
	width: 100%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	overflow: hidden;

}
.voutcher-divider{

	display: flex;

}
.voutcher-left{
	width: 60%
}
.voutcher-name{
	color: grey;
	font-size: 9px;
	font-weight: 500;
}
.voutcher-code{
	color: red;
	font-size: 11px;
	font-weight: bold;
}
.voutcher-right{
	width: 40%;	 
	background-color: purple;
	color: #fff;
}

.discount-percent{
	font-size: 12px;
	font-weight: bold;
	position: relative;
	top: 5px;
}
.off{
	font-size: 14px;
	position: relative;
	bottom: 5px;
}

.thumbnail-image {
    height: 250px;
    width: 100%;
    object-fit: cover;
}

.cat-btn{
  background-color: red;
  padding: 10px 20px
}

.products-box-main{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}

@media only screen and (max-width: 1024px){
  .products-box-main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }
}
@media only screen and (max-width: 768px){
  .products-box-main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
    .thumbnail-image {
    height: 200px !important;
}
}

`;