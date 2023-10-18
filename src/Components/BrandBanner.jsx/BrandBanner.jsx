import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";


const BrandBanner = () => {
  return (
    <div className="h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Slider 1 Start */}
          <div
            className="slider-1 h-[80vh] flex relative"
            style={{
              backgroundImage: `url('https://www.bmw.com.bd/content/dam/bmw/marketASIA/bmw_com_bd/image_large/bmw-home-teaser-the7-1680x756.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1616393731198.jpg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="text-content relative z-10 my-20 space-y-5">
              <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
                Let&apos; have a party!
              </h3>
              <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-color-primary font-bold">
                It&apos; time to <br />
                celebrate!
              </h1>
              <div className="cta"></div>
            </div>
          </div>
          {/* Slider 1 End */}
        </SwiperSlide>

        <SwiperSlide>
          {/* Slider 2 Start */}
          <div
            className="slider-2 h-[80vh] flex"
            style={{
              backgroundImage: `url('https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/homepage-re-imagine/3_2/HP_Tabs_Electric_2160.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="text-content relative z-10 my-20 space-y-5">
              <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
                We are here for you!
              </h3>
              <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-color-primary font-bold">
                Concept to <br />
                Celebration.
              </h1>
              <div className="cta"></div>
            </div>
          </div>
          {/* Slider 2 End */}
        </SwiperSlide>

        <SwiperSlide>
          {/* Slider 3 Start */}
          <div
            className="slider-2 h-[80vh] flex"
            style={{
              backgroundImage: `url('https://www.bmw.com.bd/content/dam/bmw/common/all-models/x-series/x5/2019/highlights/bmw-x5-highlights-sp-xxl.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1574351079295.jpg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Your Event, Our Expertise. */}
            <div className="text-content relative z-10 my-20 space-y-5">
              <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
                Elegance in Every Event
              </h3>
              <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-color-primary font-bold">
                Enjoy your <br />
                celebration!
              </h1>
              <div className="cta"></div>
            </div>
          </div>
          {/* Slider 3 End */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandBanner;
