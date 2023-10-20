const ProductPage = () => {
  return (
    <div>
      {/* banner */}
      <div>
        <div
          className="slider-1 h-[80vh] flex relative"
          style={{
            backgroundImage: `url('https://www.bmw.com.bd/content/dam/bmw/common/all-models/x-series/x5/2019/highlights/bmw-x5-highlights-sp-xxl.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1574351079295.jpg')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-content flex justify-center items-center flex-col z-10 space-y-5 bg-[#282828]/[.50] w-full h-full top-0 absolute">
            <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
              It&apos;s not just a CAR!
            </h3>
            <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-[#ff2d37] font-bold">
              It&apos;s a DREAM!!
            </h1>
            <div className="cta"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
