import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <div>
      This is Nav
      <Outlet></Outlet>
      This is Footer
      
    </div>
  )
}

export default MainLayout
