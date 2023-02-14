import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './style/variables.scss'
import Main from 'Routes/Main/Main'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import CountryPage from 'Routes/CountryPage/CountryPage'
import CountryDetails from 'Routes/CountryDetails/CountryDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<CountryPage />} />
      <Route path="CountryDetails/:countryId" element={<CountryDetails />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
