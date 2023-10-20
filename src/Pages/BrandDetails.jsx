import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductData } from "../Hooks/fetchData";
import BrandBanner from "../Components/BrandBanner.jsx/BrandBanner";

const BrandDetails = () => {
  const brand = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProductData()
      .then((data) => {
        let filterData = data.filter((oneData) =>
          oneData.brandName.includes(brand.brand)
        );
        console.log(filterData);
        setProductData(filterData);
      })
      .catch((error) => console.log(error));
  }, [brand]);

  return (
    <div>
      {productData.length > 1 ? (
        <div>
          <BrandBanner></BrandBanner>
          <div className="grid grid-cols-3 gap-5 my-[8%]">
            {productData?.map((product) => (
              <div key={product._id}>
                <div className="shadow-lg border border-[#ff2d37] rounded-xl">
                  <div className="p-3">
                    <h1 className="text-2xl">{product?.productName}</h1>
                    <h1 className="text-xl uppercase">
                      <span>Brand: </span>
                      {product?.brandName}
                    </h1>
                  </div>
                  <div className="img ">
                    <img
                      className="w-[400px] h-[200px]"
                      src={`${product?.productImage}`}
                      alt=""
                    />
                  </div>
                  <div className="content p-3">
                    <h1 className="text-2xl uppercase">
                      <span>Type: </span> {product?.productType}
                    </h1>
                    <h1 className="text-2xl uppercase">
                      <span>Price: </span>
                      {product?.productPrice}
                    </h1>
                    <h1 className="text-2xl uppercase">
                      <span>Ratting: </span>
                      {product?.productRatting}
                    </h1>
                    <div className="cta text-2xl flex justify-between items-center gap-[4%]  my-5">
                      <Link
                        to={`/products/${product._id}`}
                        className="px-3 !w-[45%] py-2 bg-[#ff2d37] rounded-xl text-white text-center"
                      >
                        <button>Details</button>
                      </Link>
                      <Link
                        to={`/api/update/${product._id}`}
                        className="px-3 !w-[45%] py-2 bg-[#ff2d37] rounded-xl text-white text-center"
                      >
                        <button>Update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          NO DATA AVAILABLE
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
