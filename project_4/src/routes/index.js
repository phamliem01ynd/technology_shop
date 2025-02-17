import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import ForgetPassWord from "../pages/ForgetPassword";
import Register from "../pages/Register";
import HomeAdmin from "../pages/Admin/admin";
import User from "../components/Admin/user";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import Product from "../components/Admin/product";
import Category from "../components/Admin/category";
import ProductPage from "../pages/ProductPage/productPage";
import Shop from "../pages/Shop/shop";
import Cart from "../pages/Cart/cart";
import About from "../pages/About/about";
import Blog from "../pages/BlogPage/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "blog",
        element:<Blog/>
      },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shop",
        element:<Shop />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgetpassword",
        element: <ForgetPassWord />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "category/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "product/:productName",
        element: <ProductPage />,
      },
      {
        path: "admin",
        element: <HomeAdmin />,
        children: [
          {
            path: "user",
            element: <User />,
          },
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "category",
            element: <Category />,
          },
        ],
      },
    ],
  },
]);

export default router;
