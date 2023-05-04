import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './main/Main.jsx';
import Home from './main/Home.jsx';
import AuthProvider from './main/Provider/AuthProvider.jsx';
import Register from './main/Provider/pages/Register.jsx';
import Login from './main/Provider/pages/Login.jsx';
import Google from './main/Provider/pages/Google.jsx';
import Chef from './main/Provider/pages/chefs/Chef.jsx';
import Blogs from './main/Blogs.jsx';
import Error from './Error.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/google",
        element: <Google/>,
      },
      {
        path: "chef-recipes/:id",
        element: <Chef/>,
        loader:({params})=>fetch(`http://localhost:5000/allData/${params.id}`)
      },
      {
        path: "*",
        element: <Error/>,
      },
      {
        path: "/blog",
        element: <Blogs/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
