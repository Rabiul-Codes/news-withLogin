import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home"
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";
import Root from "../LayOut/Root";
import NewsDetails from "../component/NewsDetails";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
    {
      path:"/",
      element:<Home></Home>,
       loader:async()=>{
        const res = await fetch('/news.json');
        if(!res.ok){
          throw new Error('data not loaded')
        }
        return await res.json();
      }
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
      element:<News></News>,
       loader:async()=>{
        const res = await fetch('/news.json');
        if(!res.ok){
          throw new Error('data not loaded')
        }
        return await res.json();
      }
    },
    {
      path:'news/:id',
      element:<PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
      loader:async({params})=>{
        const res = await fetch('/news.json');
        if(!res.ok){
          throw new Error('data not loaded')
        }
        const data = await res.json();
        const targetData =data.find(news=>news.id ===(params.id));
        return targetData

      }
    }
    ]
  },
]);
export default router;