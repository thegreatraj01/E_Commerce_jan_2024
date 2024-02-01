import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Import Swiper styles
import './Hero.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = ({ slider1, slider2, slider3 }) => {
  return (
    <Swiper
      className='shop-slider-container'
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      loop={true}
      effect={"fade"}
      // fadeEffect={{ crossFade: true }}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='shop-slider'><img src={slider1} alt="img" /></SwiperSlide>
      <SwiperSlide className='shop-slider'><img src={slider2} alt="img" /></SwiperSlide>
      <SwiperSlide className='shop-slider'><img src={slider3} alt="img" /></SwiperSlide>
    </Swiper>
  );
};

export default Hero;
