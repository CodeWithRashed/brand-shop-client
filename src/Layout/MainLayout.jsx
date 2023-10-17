import { Outlet } from "react-router-dom"
import Navbar from "../Components/Nav/Navbar"


const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      This is Footer
      
    </div>
  )
}

export default MainLayout
