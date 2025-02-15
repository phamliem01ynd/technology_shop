import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "../src/components/GlobalStyle/globalStyle.scss";
import { AuthWrapper } from "./components/context/auth.usecontext";
import ProductWrapper from "./components/context/productContext";
import WrapperCategory from "./components/context/categoryContext";
import { Provider } from "react-redux";
import store from "./components/redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <AuthWrapper>
        <WrapperCategory>
          <ProductWrapper>
            <RouterProvider router={router} />
          </ProductWrapper>
        </WrapperCategory>
      </AuthWrapper>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
