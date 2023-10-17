import { useContext } from "react"
import { GlobalDataContext } from "../ContextApi/DataContext"

const HomePage = () => {
    const contextData = useContext(GlobalDataContext)
    console.log(contextData)
  return (
    <div>
      THis is homepage
    </div>
  )
}

export default HomePage
