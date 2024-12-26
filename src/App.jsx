import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./Features/cart/Cart";
import Menu, { loader as menuLoader } from "./Features/menu/Menu";
import Order from "./Features/Order/Order";
import CreateOrder from "./Features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "order/:orderid", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
