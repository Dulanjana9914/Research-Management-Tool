import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../utils/validation/Validation.js';


const initialState = {
  name:'',
  email: '',
  password: '',
  cf_password:'',
  mobile:'',
  user_role:'',
  research_area:'',
  reg_number:'',
  err: '',
  success: ''
}

function Register() {

  const [user, setUser] = useState(initialState)

  const {name,email,password,cf_password,mobile,user_role,research_area,reg_number,err, success} = user

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUser({...user, [name]:value, err: '', success: ''})
}

const handleSubmit = async e => {
  e.preventDefault()
  
  if(isEmpty(name) || isEmpty(password) || isEmpty(mobile) || isEmpty(user_role) || isEmpty(reg_number) )
  return setUser({...user, err: "Please fill in all fields.", success: ''})

  if(!isEmail(email))
  return setUser({...user, err: "Invalid email type.", success: ''})

  if(isLength(password))
  return setUser({...user, err: "Password must be at least 8 characters.", success: ''})

  if(!isMatch(password, cf_password))
  return setUser({...user, err: "Passwords did not match.", success: ''})


  try {
    const res = await axios.post('http://localhost:8070/user/register', {
      name, email, password,mobile,user_role,research_area,reg_number
  })

  setUser({...user, err: '', success: res.data.msg})

  } catch (err) {
      err.response.data.msg && 
      setUser({...user, err: err.response.data.msg, success: ''})
  }
}

  return (
    <div>
 <div className="register">
  <form onSubmit={handleSubmit}>
  <h1 className="Hfont">Sign Up With Email</h1> 
  <br></br>

            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

  <div className="col-md-4 mb-3 font">
    <label htmlFor="name" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="name"
      placeholder="Enter Name"
      value={name}
      name="name"
      onChange={handleChangeInput}
      required
    />
    </div>

    <div className='regpage'>

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

        </div>
    
   <div className='regpage'>


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

    </div>
    

    <div className="col-md-4 mb-3 font">
    <label htmlFor="cf_password" className="form-label">
      Re-enter Password
    </label>
    <input
      type="password"
      className="form-control"
      id="cf_password"
      placeholder="Confirm Password "
      value={cf_password}
      name="cf_password"
      onChange={handleChangeInput}
      required
    />
    </div>

    <div className="col-md-4 mb-3 font">
    <label htmlFor="cf_password" className="form-label">
      Mobile
    </label>
    <input
      type="text"
      className="form-control"
      id="mobile"
      placeholder="Mobile number "
      value={mobile}
      name="mobile"
      onChange={handleChangeInput}
      required
    />
    </div>

    <div className="col-md-4 mb-3 font">
    <label htmlFor="cf_password" className="form-label">
      User Role
    </label>
    <input
      type="text"
      className="form-control"
      id="user_role"
      placeholder="user_role"
      value={user_role}
      name="user_role"
      onChange={handleChangeInput}
      required
    />
    </div>

    <div className="col-md-4 mb-3 font">
    <label htmlFor="cf_password" className="form-label">
      Research Area
    </label>
    <input
      type="text"
      className="form-control"
      id="research_area"
      placeholder="research_area number "
      value={research_area}
      name="research_area"
      onChange={handleChangeInput}
     
    />
    </div>

    <div className="col-md-4 mb-3 font">
    <label htmlFor="cf_password" className="form-label">
      reg_number
    </label>
    <input
      type="text"
      className="form-control"
      id="reg_number"
      placeholder="reg_number number "
      value={reg_number}
      name="reg_number"
      onChange={handleChangeInput}
      required
    />
    </div>

    
    < button type="submit" class="btn btn-success btn-lg">
          
          Sign Up
         
        </button>

    <br></br>  

    </form>
    <hr className="col-md-12 mb-2" /> 

     

   <center><h3>Have an account?</h3></center> 

  <center> <Link to="/login">
       < button type="submit" class="btn btn-success btn-lg">
          
         Login Here
         
        </button></Link> </center>

       </div>
     </div>  

  )
}

export default Register;