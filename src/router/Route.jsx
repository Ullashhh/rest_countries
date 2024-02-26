import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Statistics from "../components/Statistics/Statistics";
import Details from "../components/Details/Details";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:detailsId",
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/name/${params.detailsId}`),
      },
    ],
  },
]);

export default Route;