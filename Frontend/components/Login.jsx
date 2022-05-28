import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


function Login() {
    
    const [email,setemail] = useState("");
    const [password, setPassword] = useState("");
    const history  = useHistory();
      
    //if the authentication is already available do not need to login again

    async function signIn(event){
        event.preventDefault();

        const config = {
            headers: {
                "const-Type": "application/json"
            }
        };
        try {
            
            //getting data from backend
            const {data} = await axios.post("http://localhost:8070/user/login", {email, password}, config);

            //setting the patient authorization token
            localStorage.setItem("userAuthToken", `User ${data.token}`)
            localStorage.setItem("user",JSON.stringify(data.result))
            localStorage.setItem('firstLogin', true)
        
            history.push('/submittopic')
        } catch (error) {
            if(error.response.status === 404){
                alert("Invalid Registration Number")
            }
            else if(error.response.status === 400){
                alert("Email or Password Incorrect")
            }
            else{
                alert("Authentication Failed")
            }
        }
    }

    return (
       
     <div className="container" align="center">
        <form className="staffLogin" onSubmit={signIn}>
            <h2>Login</h2>
            <br></br>
            <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(event) => {setemail(event.target.value)}}
                required
            />

            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(event) => {setPassword(event.target.value)}} 
                required 
             />
              
             <input type="submit" value="Sign In" className="form-submit-btn"/>
                
            <div className="text-muted">
             <p >or</p>
             <p> Don't have an Account? <Link to="/register"> Click Here</Link></p>
            </div>
        </form>
    </div>
      
    )
}

export default Login;