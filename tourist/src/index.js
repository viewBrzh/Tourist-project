import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlaceDetail from "./pages/placeDetail";
import Contact from "./pages/contact";
import Updatecontact from "./pages/Updatecontact";
import Manage from "./pages/manage";
import UpdatePlace from "./pages/updatePlaces";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <PlaceDetail></PlaceDetail>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/updatecontact/:id",
    element: <Updatecontact />,
  },
  {
    path: "/updateplace/:id",
    element: <UpdatePlace />,
  },
  {
    path: "/manage",
    element: <Manage></Manage>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
