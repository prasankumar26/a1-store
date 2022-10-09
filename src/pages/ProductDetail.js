import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import authFetch from '../axios/custom'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components';

import {Link} from 'react-router-dom'
import Loading from '../components/Loading';



const ProductDetail = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const {id} = useParams()

    const [singleProduct, setSingleProduct] = useState()
    const [loading, setLoading] = useState(false)

    const fetchSingleProduct = async () =>{
        setLoading(true)
        try {
            const response = await authFetch(`/products/${id}`)
            const data = response.data

            if(data){
              const {
                 brand,
                 category,
                 title,
                 description,
                 discountPercentage,
                 images,
                 price,
                 rating,
                 stock,
                 thumbnail,
              } = data
              const newProducts = {
                 brand,
                 category,
                 title,
                 description,
                 discountPercentage,
                 images,
                 price,
                 rating,
                 stock,
                 thumbnail,
              }
              setLoading(false)
              setSingleProduct(newProducts)
            } else {
                setSingleProduct(null)
            }
        } catch (error) {
             setLoading(false)
            console.log(error);
        }
    }

    useEffect(() =>{
       fetchSingleProduct()
    }, [])


    if(loading){
        return <Loading />
    }


  return (
    <>
    <Wrapper>
    <div className="container my-5 pt-5">
        <h2 className='text-center text-uppercase mb-5'> <b>{singleProduct?.title}</b> Product Details</h2>
        <div className="row">
            <div className="col-lg-6 mx-auto text-center mb-5">
                <img src={singleProduct?.thumbnail} alt="phone" className="img-fluid mb-2 rounded" />
                <Slider {...settings}>
                {
                    singleProduct?.images.map((item) =>{
                        return <>
                        <div>
                        <img src={item} alt={singleProduct?.title} className="img-fluid w-100 rounded" />
                        </div>
                        </>
                    })
                }
                </Slider>
            </div>
            <div className="col-lg-6">
                
                <table>
                <tr>
                    <th className='text-uppercase'>Product QNA</th>
                    <th className='text-uppercase'>Product Detail</th>
                </tr>
                <tr>
                    <td>title</td>
                    <td>{singleProduct?.title}</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>{singleProduct?.description}</td>
                </tr>
                <tr>
                    <td>brand</td>
                    <td>{singleProduct?.brand}</td>
                </tr>
                <tr>
                    <td>category</td>
                    <td>{singleProduct?.category}</td>
                </tr>
                <tr>
                    <td>discountPercentage</td>
                    <td>{singleProduct?.discountPercentage}</td>
                </tr>
                <tr>
                    <td>price</td>
                    <td>{singleProduct?.price}</td>
                </tr>
                <tr>
                    <td>rating</td>
                    <td>{singleProduct?.rating}</td>
                </tr>
                <tr>
                    <td>stock</td>
                    <td>{singleProduct?.stock}</td>
                </tr>
                <tr>
                    <td>brand</td>
                    <td>{singleProduct?.brand}</td>
                </tr>
                </table>

                  <Link to="/" className="btn btn-info mt-4 text-white">Back To Home</Link>

            </div>
        </div>
    </div>
    </Wrapper>
    </>
  )
}

export default ProductDetail


const Wrapper = styled.section`
overflow: hidden;
table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}
`