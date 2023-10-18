import React  from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const root=ReactDOM.createRoot(document.getElementById("root"));
const AppRoot=()=>(
  <div>
    <Header />
   <Outlet />
  </div>
);
const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

// rootReact.render(<AppRoot />);
root.render(<RouterProvider router={appRouter} />);
