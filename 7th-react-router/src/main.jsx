import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import Footer from './components/footer/footer.jsx'
import Header from './components/header/header.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Userid from './components/users/Userid.jsx'
import Github from './components/github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: 'footer',
        element: <Footer />
      },
      {
        path: 'header',
        element: <Header />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'users/:userid',
        element: <Userid />
      },
      {
        path: 'github',
        element: <Github />,
        loader: async() => {
          const res = await fetch('https://api.github.com/users/prajithnambiar')
          return  await res.json()
        }
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
