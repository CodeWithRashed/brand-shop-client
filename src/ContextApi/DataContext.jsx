import { createContext } from "react"
import PropTypes from 'prop-types';

export const GlobalDataContext = createContext(null)

const DataContext = ({children}) => {
    const globalDataVariable = {"name" : "data"}
  return (
   <GlobalDataContext.Provider value={globalDataVariable}>
        {children}
   </GlobalDataContext.Provider>
  )
}
DataContext.propTypes = {
    children: PropTypes.node
}
export default DataContext
