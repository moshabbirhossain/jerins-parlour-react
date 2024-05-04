import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Team from './pages/Team.jsx';
import MainLayout from './layout/MainLayout.jsx';
import SignUp from './pages/SignUp.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Jerin from './pages/Jerin.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home/>,
      },
      {
        path: "/jerin",
        element: <Jerin/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "/team",
        element: <Team/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
  // {
  //   path: "/portfolio",
  //   element: <Portfolio/>,
  // },
  // {
  //   path: "/team",
  //   element: <Team/>,
  // },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
