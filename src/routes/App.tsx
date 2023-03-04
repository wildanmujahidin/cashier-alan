import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { ProductAdd } from "../pages/products/ProductAdd";
import { ProductList } from "../pages/products/ProductList";
import { Transaction } from "../pages/Transaction";
import "../styles/App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/transaction",
      element: <Transaction />,
    },
    {
      path: "/",
      element: <Transaction />,
    },
    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/product-add",
      element: <ProductAdd />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
