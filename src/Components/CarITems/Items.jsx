
const Items = () => {
  return (
    <div>
      <div className="rounded-full border-2 border-red-500 overflow-hidden h-[200px] w-[200px]">
        <img className="h-[200px] w-[200px] object-cover object-center"
          src="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/category/c1.jpg"
          alt=""
        />
      </div>
      <div><h2 className="text-lg font-bold text-center mt-4 uppercase">Replacement Parts</h2></div>
    </div>
  );
};

export default Items;
