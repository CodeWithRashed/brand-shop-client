import { toast } from "react-toastify";

const AddProduct = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const productImage = form.productImage.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const productPrice = form.productPrice.value;
    const productRatting = form.productRatting.value;
    const productDescription = form.productDescription.value;

    const productData = {
      productName,
      productImage,
      brandName,
      productType,
      productPrice,
      productRatting,
      productDescription,
    };
    console.log(productData);

    try {
      const response = await fetch("https://brand-shop-back-end.vercel.app/api/addProduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        form.reset();
        toast.success("Product Added!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="py-[5%] text-2xl">
      <div className="lg:w-[80%] mx-auto shadow-lg rounded-t-xl border-x-2 border-t-2 border-red-200">
        <h1 className="text-3xl py-3 text-center">Add Product</h1>
      </div>
      <div className="lg:w-[80%] mx-auto shadow-xl rounded-b-xl py-5 px-8 ">
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-[4%] space-y-3">
          {/* Product Name */}
          <div className="flex flex-col w-full lg:w-[48%]">
            <span>Product Name</span>
            <input
              required
              className="border-2 border-red-200 w-full rounded-lg p-1"
              type="text"
              name="productName"
            />
          </div>
          {/* Product Image */}
          <div className="flex flex-col w-full lg:w-[48%]">
            <span>Product Image</span>
            <input
              required
              className="border-2 border-red-200 w-full rounded-lg p-1"
              type="text"
              name="productImage"
            />
          </div>
          {/* Product Brand Name */}
          <div className="flex flex-col  w-full lg:w-[48%]">
            <span>Brand Name</span>
            <select
              name="brandName"
              required
              className="select text-xl border-2 border-red-200"
            >
              <option defaultValue>Choose Product Brand</option>
              <option value="toyota">Toyota</option>
              <option value="ford">Ford</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
              <option value="tesla">Tesla</option>
              <option value="honda">Honda</option>
            </select>
          </div>

          {/* Product  Type */}
          <div className="flex flex-col w-full lg:w-[48%]">
            <span>Product Type</span>
            <select
              required
              name="productType"
              className="select text-xl border-2 border-red-200"
            >
              <option defaultValue>Choose Product Type</option>
              <option value="suv">SUV</option>
              <option value="classic">Classic</option>
              <option value="luxury">Luxury Car</option>
              <option value="sports">Sports Car</option>
              <option value="electric">Electric Car</option>
              <option value="hybrid">Hybrid Car</option>
              <option value="offRoad">Off-Road</option>
            </select>
          </div>
          {/* Product Price */}
          <div className="flex flex-col w-full lg:w-[48%]">
            <span>Product Price</span>
            <input
              required
              className="border-2 border-red-200 w-full rounded-lg p-1"
              type="text"
              name="productPrice"
            />
          </div>

          {/* Product Ratting */}
          <div className="flex flex-col w-full lg:w-[48%]">
            <span>Product Rating</span>

            <select
              name="productRatting"
              required
              className="select text-xl border-2 border-red-200  "
            >
              <option defaultValue>Product Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </select>
          </div>
          {/* Product Description */}
          <div className="flex flex-col w-full">
            <span>Product Description</span>
            <textarea
              required
              className="w-full h-[100px] border-2 border-red-200 rounded-xl"
              type="text"
              name="productDescription"
            />
          </div>

          {/* Submit BUtton */}
          <div className="flex justify-center items-center w-full m-10">
            <button
              type="submit"
              className="  text-center border-2 border-red-200 p-2 rounded-xl"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
