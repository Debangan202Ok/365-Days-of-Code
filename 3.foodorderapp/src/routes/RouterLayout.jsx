import { createBrowserRouter } from "react-router-dom";
import Body from "../components/body";
import Home from "../App";
// import Cart from "../components/Cart";
// import ResturrantCard from "../components/ResturantCard";
import { lazy, Suspense } from "react";

const Cart = lazy(() => import("../components/Cart"));
const ResturrantCard = lazy(() => import("../components/ResturantCard"));

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
        element: (
          <Suspense fallback={<h3>Loding...</h3>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:id",
        element: <ResturrantCard />,
      },
    ],
  },
]);

export default router;
