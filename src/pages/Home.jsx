import { Box, Container, Typography } from '@mui/material';
// import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Spidal from '../components/Spidal';
// import Typography from '@mui/material';
import Who from '../components/Who';
// import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
    const setting = {
        dots: false,
        Infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        autoplayHoverPause: true,
        cssEase: 'linear'
    }
  return(
    <Box>
        {/* <Header /> */}
        <Box>
            <div className="secondTopBar">
                <a href="#contact">تواصل معنا</a>
                <a href="#who">العلامات التجاريه</a>
                <a href="#">الرئيسيه</a>
            </div>
        </Box>
        {/* main */}
        <Box>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{ marginTop: '124px' }}
            >
                <SwiperSlide>
                    <div className="desc">
                        <Typography variant='h4' element='h3' >صيانة غسالات</Typography>
                    </div>
                    <img src="/slider1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <Typography variant='h4' element="h3">صيانة تكييفات</Typography>
                    </div>
                    <img src="/slider2.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </Box>
        {/* who */}
        <Container id="who">
            <Typography variant='h2' element="h2" textAlign={"center"}></Typography>
            <Who />
        </Container>
        {/* brands */}
        <Container id="contact">
        </Container>        {/* <Footer /> */}

            <Contact />
    </Box>
  )
}

export default Home
