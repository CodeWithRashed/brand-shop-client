import { useEffect, useState } from "react";
import { fetchProductData } from "../Hooks/fetchData";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CartPage = () => {
  const [addData, setAllData] = useState(null);
  const cartItems = useLoaderData();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductData();
      const filteredData = data.filter((singleData) =>
        cartItems?.some((item) => item.id === singleData._id)
      );
      setAllData(filteredData);
    };
    fetchData();
  }, [cartItems]);

  const handleDelete = async (id) => {
    await fetch(`https://brand-shop-back-end.vercel.app/api/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Removed from Cart!!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(data);
      });
  };

  return (
    <div>
      <div className="cart-container grid lg:grid-cols-3 gap-8 my-[5%]">
        <div className="cart-content col-span-2">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">3 Items</h2>
          </div>
          <div className="grid grid-cols-4 mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Image
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Name
            </h3>
            <h3 className="col-span-2 font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
          </div>
          {addData?.map((cartItem) => (
            <div key={cartItem._id}>
              <div className="grid grid-cols-4 gap-5 space-y-3 justify-start items-center">
                <div className="my-2">
                  <img
                    className="h-20 w-20 rounded-xl"
                    src={cartItem?.productImage}
                    alt=""
                  />
                </div>
                <div className="text-2xl">{cartItem?.productName}</div>
                <div className="text-2xl">{cartItem?.productPrice}$</div>
                <button
                  onClick={() => handleDelete(cartItem._id)}
                  className="text-2xl border-2 border-red-200 p-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              <span>Total Items:</span> 3
            </span>
            <span className="font-semibold text-sm">
              <span>SUB TOTAL: </span>590$
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>

            <p>Standard shipping - $10.00</p>
          </div>
          <div className="py-10">
            <label className="font-semibold inline-block mb-3 text-sm uppercase">
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-[#ff2d37] hover:bg-[#ff2d37]/[.80] px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <button className="bg-[#ff2d37] hover:bg-[#ff2d37]/[.80] py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
