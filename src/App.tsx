import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/home/Home';
import { BrowserRouter } from 'react-router-dom'
import MenuContainer from './Pages/containers/MenuContainer';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ContentContainer from './Pages/containers/ContentContainer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from './Pages/users/Users';
import Products from './Pages/products/Products';
import Login from './Pages/login/Login';
import './styles/global.scss'
import User from './Pages/user/User';
import Product from './Pages/product/Product';


function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <MenuContainer />
          </div>
          <div className="contentContainer">
            {/* <QueryClientProvider client={queryClient}> */}
            <Outlet />
            {/* </QueryClientProvider> */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;










  // <BrowserRouter>
  //   <div className="App">
  //     <Navbar />

  //     {/* <div className='menuContainer'> <MenuContainer /> </div> */}
  //     {/* <div className='contentContainer'> <ContentContainer /> </div> */}
  //     <Footer />
  //   </div>
  // </BrowserRouter>

}

export default App;
