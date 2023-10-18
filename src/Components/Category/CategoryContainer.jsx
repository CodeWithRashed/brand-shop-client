import CategoryCard from "./CategoryCard"

const CategoryContainer = () => {
  return (
    <div className="my-[5%] grid gap-y-12 grid-cols-3 ">
    
      <CategoryCard image="http://magento2.magentech.com/themes/sm_autostore/pub/media/wysiwyg/categories/cate-1.jpg" title="Mercedes-Benz"></CategoryCard>
      <CategoryCard image="https://dealerdotcom.webdamdb.com/embeddables/display.php?size=550&webid=AB986Ehgc06UWNCJ" title="TOYOTA"></CategoryCard>
      <CategoryCard image="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage-Redesign/Hero/2024-Pilot/Homepage_Hero_Carousel_L_3019x1190.jpg?sc_lang=en" title="Honda"></CategoryCard>
      <CategoryCard image="https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/bronco/2024/collections/dm/23_FRD_BRO_49888.tif?croppathe=1_21x9&wid=1440" title="Ford"></CategoryCard>
      <CategoryCard image="https://www.bmw.com.bd/content/dam/bmw/marketASIA/common/publicPools/teaser-pool/home/m-performance-parts-m.jpg/jcr:content/renditions/cq5dam.resized.img.485.low.time1464789163417.jpg" title="BMW"></CategoryCard>
      <CategoryCard image="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-3-Performance-Carousel-Slide-1-Desktop-Global" title="TESLA"></CategoryCard>
    </div>
  )
}

export default CategoryContainer
