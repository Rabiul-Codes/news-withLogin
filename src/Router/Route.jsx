import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home"
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";
import Root from "../LayOut/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/news",
      element:<News></News>
    },
    ]
  },
]);
export default router;