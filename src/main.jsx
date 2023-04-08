import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Fisrt from './component/First/Fisrt';
import Friends from './component/Friends/Friends';
import FriendDetail from './component/FriendDetail/FriendDetail';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ]);


const router = createBrowserRouter([

  {
    path:'/',
    element:<Home></Home>,
    children: [
      {
        path: '/',
        element:<Fisrt></Fisrt>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/friend/:friendId',
        element: <FriendDetail></FriendDetail>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
