import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {


     const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };


  return (
      <Wrapper>
        <Slider {...settings}>
          <div className='banner-img-box'>
        <img src="https://s.yimg.com/uu/api/res/1.2/mQ3wMdW0.qoJriEnsTwoAA--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-07/4a425a40-fd56-11ec-beee-be16b8848f18.cf.jpg" alt="" className="img-fluid" />
          </div>
          <div className='banner-img-box'>
        <img src="https://www.yugatech.com/wp-content/uploads/2022/06/Best-Laptops-40k.png" alt="" className="img-fluid" />
          </div>
          <div className='banner-img-box'>
        <img src="https://www.gannett-cdn.com/presto/2022/01/18/USAT/9a746684-293f-4575-98f5-2ad67b0a4b8e-Best_Laptop_Deals_2022.jpg" alt="" className="img-fluid" />
          </div>
          <div className='banner-img-box'>
        <img src="https://s.yimg.com/uu/api/res/1.2/mQ3wMdW0.qoJriEnsTwoAA--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-07/4a425a40-fd56-11ec-beee-be16b8848f18.cf.jpg" alt="" className="img-fluid" />
          </div>
          <div className='banner-img-box'>
        <img src="https://www.techadvisor.com/wp-content/uploads/2022/06/best_student_laptops.jpg?quality=50&strip=all" alt="" className="img-fluid" />
          </div>
          <div className='banner-img-box'>
        <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg" alt="" className="img-fluid" />
          </div>
        </Slider>

   </Wrapper>
  )
}

export default Banner

const Wrapper = styled.section`
margin-top: 60px;
overflow: hidden;

.banner-img-box{
    width: 100%;
}
.banner-img-box img{
    width: 100%;
}

@media only screen and (min-width: 768px) {
  .banner-img-box img{
    height: 90vh
}
}


`;
