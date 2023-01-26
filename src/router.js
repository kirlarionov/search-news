import React from "react"
import { createBrowserRouter } from "react-router-dom"
import MainPage from "./pages/MainPage"
import AboutPage from "./pages/AboutPage"
import Layout from "./Layout"
import NotFoundPage from "./pages/NotFoundPage"

const ROUTES = {
   MainPage: "/",
   AboutPage: "/about",
}

export const router = createBrowserRouter([
   {
      path: ROUTES.MainPage,
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
         {
            index: true,
            element: <MainPage />,
         },
         {
            path: ROUTES.AboutPage,
            element: <AboutPage />,
         },
      ],
   },
])
