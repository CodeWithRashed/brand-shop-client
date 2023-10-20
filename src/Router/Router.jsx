import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";
import Error404 from '../Pages/Error404';
import AddProduct from "../Pages/AddProduct";
import ProductDetail from "../Pages/ProductDetail";
import BrandDetails from "../Pages/BrandDetails";
import ProductPage from "../Pages/ProductPage";
import PrivateRoute from '../Router/PrivateRoute'
import CartPage from "../Pages/CartPage";
import UpdateProduct from "../Pages/UpdateProduct";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/products",
        element: <ProductPage></ProductPage>,
      },
      {
        path: "/products/:id",
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/api/getProduct/${params.id}`)
      },
      {
        path: "/api/update/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/api/getProduct/${params.id}`)
      },
      {
        path: "/products/brand/:brand",
        element: <BrandDetails></BrandDetails>,
      },
      {
        path: "/add",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><CartPage></CartPage></PrivateRoute>,
        loader: () => fetch("http://localhost:3000/api/getCartItems")
      },
      {
        path: "/login",
        element: <AuthPage></AuthPage>,
      }
    ],
  },
]);
