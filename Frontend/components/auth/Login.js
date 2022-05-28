import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../utils/notification/Notification'
import {dispatchLogin} from '../../redux/actions/authAction.js'
import {useDispatch} from 'react-redux'



const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const [user, setUser] = useState(initialState)
    
    const dispatch = useDispatch()
    const history = useHistory()

    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8070/user/login', {email, password})
            

            setUser({...user, err: '', success: res.data.msg})

            localStorage.setItem('firstLogin', true)
         
            dispatch(dispatchLogin())
            history.push("/")

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

      
  return (
  
   
    <div className="register">
     <form onSubmit={handleSubmit}>
     <h1 className="Hfont">Log In With Email</h1> 
     <br></br>
   
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
   
       <div className="col-md-4 mb-3 font">
       <label htmlFor="email" className="form-label">
         Email
       </label>
       <input
         type="email"
         className="form-control"
         id="email"
         placeholder="Enter Email"
         value={email}
         name="email"
         onChange={handleChangeInput}
         required
       />
       </div>
   
       <div className="col-md-4 mb-3 font">
       <label htmlFor="password" className="form-label">
         Enter Password
       </label>
       <input
         type="password"
         className="form-control"
         id="password"
         placeholder="Enter Password"
         value={password}
         name="password"
         onChange={handleChangeInput}
         required
       />
       </div>
       <br/>
       &nbsp; 
       < button type="submit" className="btn btn-success btn-lg">
             
             Login
            
           </button>
   
       <br></br>  
   
       </form>
       <br/>

 <hr className="col-md-12 mb-2" /> 
   
   <br/>
      <center><h3>Don't Have an account?</h3></center> 
   
     <center> 
     <Link to="/register">
       < button type="submit" className="btn btn-success btn-lg">
             
           Sign Up Here
            
           </button> 
           </Link>
           </center>
   
          </div> 
 )
}
export default Login;

