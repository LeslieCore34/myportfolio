import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [{ path: "/", element: <Home /> }],
    },
  ],
  {
    basename: "/myportfolio/",
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
