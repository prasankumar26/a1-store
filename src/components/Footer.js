import React from 'react'
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { BsGoogle } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import {Link} from 'react-router-dom'



const Footer = () => {
  return (
   <>
   <Wrapper>
   <div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-sm-4 col-xs-12">
        <div className="single_footer">
          <h4 className="text-warning">Services</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="contact">Contact </Link>
            </li>
           
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="single_footer single_footer_address">
          <h4 className="text-warning">Page Link</h4>
          <ul>
            <li>
              <Link to="/">Affiliate</Link>
            </li>
            <li>
              <Link to="/">Open Shop</Link>
            </li>
            <li>
              <Link to="/">Seller </Link>
            </li>
            
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="single_footer single_footer_address">
          <h4 className="text-warning">Subscribe today</h4>
          <div className="signup_form">
            <form className="subscribe">
              <input
                type="text"
                className="subscribe__input"
                placeholder="Enter Email Address"
              />
              <button type="button" className="subscribe__btn">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
        <div className="social_profile">
          <ul>
            <li>
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="#">
                <GrTwitter />
              </Link>
            </li>
            <li>
              <Link to="#">
                <BsGoogle />
              </Link>
            </li>
            <li>
              <Link to="#">
               <BsInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*- END COL */}
    </div>
    {/*- END ROW */}
    <div className="row">
      <div className="col-lg-12 col-sm-12 col-xs-12">
        <p className="copyright">
          Copyright © 2022 <Link to="/">Prasan Kumar</Link>.
        </p>
      </div>
      {/*- END COL */}
    </div>
    {/*- END ROW */}
  </div>
  {/*- END CONTAINER */}
</div>
</Wrapper>

   </>
  )
}

export default Footer


const Wrapper = styled.section`

.footer {
    background: #000;
    padding-top: 80px;
    padding-bottom: 40px;
}
/*END FOOTER SOCIAL DESIGN*/
.single_footer{}
@media only screen and (max-width:768px) { 
.single_footer{margin-bottom:30px;}
}
.single_footer h4 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 25px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
}
.single_footer h4::after {
    content: "";
    display: block;
    height: 2px;
    width: 40px;
    background: #fff;
    margin-top: 20px;
}
.single_footer p{color:#fff;}
.single_footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.single_footer ul li{}
.single_footer ul li a {
    color: #fff;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    line-height: 36px;
    font-size: 15px;
    text-transform: capitalize;
}
.single_footer ul li a:hover { color: #ff3666; }

.single_footer_address{}
.single_footer_address ul{}
.single_footer_address ul li{color:#fff;}
.single_footer_address ul li span {
    font-weight: 400;
    color: #fff;
    line-height: 28px;
}
.contact_social ul {
    list-style: outside none none;
    margin: 0;
    padding: 0;
}

/*START NEWSLETTER CSS*/
.subscribe {
    display: block;
    position: relative;
    margin-top: 15px;
    width: 100%;
}
.subscribe__input {
background-color: #fff;
border: medium none;
border-radius: 5px;
color: #333;
display: block;
font-size: 15px;
font-weight: 500;
height: 60px;
letter-spacing: 0.4px;
margin: 0;
padding: 0 150px 0 20px;
text-align: center;
text-transform: capitalize;
width: 100%;
}
@media only screen and (max-width:768px) { 
.subscribe__input{padding: 0 50px 0 20px;}
}

.subscribe__btn {
background-color: transparent;
border-radius: 0 25px 25px 0;
color: #01c7e9;
cursor: pointer;
display: block;
font-size: 20px;
height: 60px;
position: absolute;
right: 0;
top: 0;
width: 60px;
}
.subscribe__btn i{transition: all 0.3s ease 0s;}
@media only screen and (max-width:768px) { 
.subscribe__btn{right:0px;}
}

.subscribe__btn:hover i{
    color:#ff3666;
}
button {
    padding: 0;
    border: none;
    background-color: transparent;
    -webkit-border-radius: 0;
    border-radius: 0;
}
/*END NEWSLETTER CSS*/

/*START SOCIAL PROFILE CSS*/
.social_profile {margin-top:40px;}
.social_profile ul{
list-style: outside none none;
margin: 0;
padding: 0;
}
.social_profile ul li{float:left;}
.social_profile ul li a {
    text-align: center;
    border: 0px;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    margin: 0px 5px;
    font-size: 18px;
    color: #fff;
    border-radius: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    display: block;
    border: 1px solid rgba(255,255,255,0.2);
}
@media only screen and (max-width:768px) { 
.social_profile ul li a{margin-right:10px;margin-bottom:10px;}
}
@media only screen and (max-width:480px) { 
.social_profile ul li a{
    width:40px;
    height:40px;
    line-height:40px;
}
}
.social_profile ul li a:hover{
background:#ff3666;
border: 1px solid #ff3666;
color:#fff;
border:0px;
}
/*END SOCIAL PROFILE CSS*/
.copyright {
    margin-top: 70px;
    padding-top: 40px;
    color:#fff;
    font-size: 15px;
    border-top: 1px solid rgba(255,255,255,0.4);
    text-align: center;
}
.copyright a{color:#01c7e9;transition: all 0.2s ease 0s;}
.copyright a:hover{color:#ff3666;}

.single_footer a{
    text-decoration : none;
}

`