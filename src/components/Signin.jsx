import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState("");

  const [success,setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();
  
  const submitForm = async (e) =>{
    e.preventDefault();
    setLoading("Please wait as we log you in...")

    try {
      const data = new FormData();
      data.append("email",email);
      data.append("password",password);
      const response =await axios.post("https://bug.alwaysdata.net/api/signin",data);

      setLoading("")
      setSuccess(response.data.message);

      if(response.data.user){
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setTimeout(()=>{
          navigate("/");

        },1000
      )
        
      }else{
        setSuccess("Could not login to account. Try again");
      }
      setEmail("");
      setPassword("");

    } catch (error){
      setLoading("")
      setError(error.message)

    }

  }

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-6 card shadow p-4'>
        <h2>Sign In</h2>
        <form onSubmit={submitForm}>
          <p className='bg-warning text-light rounded'>{loading}</p>
          <p className='bg-danger text-light rounded'>{error}</p>
          <p className='bg-success text-light rounded'>{success}</p>
          
          <input 
          type="email"
          className='form-control'
          placeholder='Enter your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
          
          <br />
          
          <input 
          type="password"
          className='form-control'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
          <br />
          <button type='submit' className='btn btn-primary'>
            Sign In
          </button>
        </form>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>





      </div>
    </div>
  )
}

export default Signin;

