import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router'
// Navbar
import Navbar_components from '../components/Navbar_components'
// Footer
import Footer_components from '../components/Footer_components'
// Pages
import About_page from '../pages/About_page'
import Carrers_page from '../pages/Careers_page'
import Home_page from '../pages/Home_page'
import Support_page from "../pages/Support_page"

function Layout(){
    return(
        <>
        <Navbar_components />
        <Outlet />
        <Footer_components />
        </>
    )
}
// Create routing system
const router = createBrowserRouter([
    {
       path: "/" ,
       element: <Layout />,
       children: [
        {path:"/", element: <Home_page />},
        {path:"About_page", element: <About_page />},
        {path:"Careers_page", element: <Carrers_page />},
        {path:"Support_page", element: <Support_page />}
       ]
    },
])

function Router() {
  return (
    <RouterProvider router={router}/>
)
}

export default Router