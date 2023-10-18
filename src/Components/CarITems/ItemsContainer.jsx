import Items from "./Items";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
const ItemsContainer = () => {
  return (
    <div className="my-[5%]">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
       
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items></Items>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ItemsContainer;
