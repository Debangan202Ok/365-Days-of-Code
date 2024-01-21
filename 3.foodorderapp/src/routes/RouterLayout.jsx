import { createBrowserRouter } from "react-router-dom";
import Body from "../components/body";
import Home from "../App";
import Cart from "../components/Cart";
import ResturrantCard from "../components/ResturantCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/resturant/:id",
        element: <ResturrantCard />,
      },
    ],
  },
]);

export default router;
