import { Header } from 'Components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import './Main.scss'

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <div className="Main">
        <Outlet />
      </div>
    </>
  )
}
export default Main
