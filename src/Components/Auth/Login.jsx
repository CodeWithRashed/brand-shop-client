import PropTypes from 'prop-types';
const Login = ({setPageToggle}) => {
  return (
    <div>
      Login
      <button onClick={()=>{
        setPageToggle(true)
      }}>Go To Registration</button>
    </div>
  )
}
Login.propTypes = {
    setPageToggle: PropTypes.func
}

export default Login
