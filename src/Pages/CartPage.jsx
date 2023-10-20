import { useEffect, useState } from "react";
import { fetchProductData } from "../Hooks/fetchData";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";

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
      <div className="cart-container grid lg:grid-cols-4 gap-8">
        <div className="cart-content lg:col-span-3">
          <div className="grid  border-b mb-3">
            <h1 className="font-semibold col-span-2 text-2xl">Shopping Cart</h1>
           
          </div>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="font-semibold col-span-2 text-gray-600 text-xs uppercase">
                  Product Image
                </th>
                <th className="font-semibold col-span-4 text-gray-600 text-xs uppercase">
                  Product Name
                </th>
                <th className="col-span-2 font-semibold text-gray-600 text-xs uppercase ">
                  Price
                </th>
                <th className="col-span-2 font-semibold text-gray-600 text-xs uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            
              {addData?.map((cartItem) => (
                <tr key={cartItem._id}>
                  <td className="my-2">
                    <img
                      className="h-10 w-10 rounded-xl"
                      src={cartItem?.productImage}
                      alt=""
                    />
                  </td>
                  <td className="text-xl ">
                    {cartItem?.productName}
                  </td>
                  <td className="text-xl">{cartItem?.productPrice}$</td>
                  <td>
                    <button
                      onClick={() => handleDelete(cartItem._id)}
                      className="text-xl  p-2"
                    >
                      <AiFillDelete></AiFillDelete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="order-summary">
          <div className=" mb-3">
          <h1 className="font-semibold text-2xl border-b">
            Order Summary
          </h1>
          </div>
          
          <div className="flex justify-between">
            <span className="font-semibold text-sm uppercase">
              <span>Total Items:</span> 3
            </span>
            <span className="font-semibold text-sm">
              <span>SUB TOTAL: </span>590$
            </span>
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
