import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";
import Error404 from '../Pages/Error404';
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
        element: <AuthPage></AuthPage>,
      },
      {
        path: "/add",
        element: <AuthPage></AuthPage>,
      },
      {
        path: "/cart",
        element: <AuthPage></AuthPage>,
      },
      {
        path: "/login",
        element: <AuthPage></AuthPage>,
      }
    ],
  },
]);
