import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    const [loading, SetLoading] = useState("");
    const [error, SetError] = useState("");
    const [success, SetSuccess] = useState("");

    const submitForm = async (e) =>{
        e.preventDefault();
        SetLoading("Please wait as we load your data")

        try{
            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("password", password);
            data.append("phonenumber", phonenumber);

            const response =await axios.post("https://bug.alwaysdata.net/api/signup",data)
            SetLoading("")
            SetSuccess(response.data.success);

            setUsername("");
            setEmail();
            setPassword();
            setPhonenumber();

            
        }catch (error) {
            SetLoading("")
            SetError(error.message);
        }

    
    }
  return (
    <div className='row justify-content-center mt-4'>
        <div className='col-md-6 card shadow p-5'>
        <h2>Sign Up</h2>
        <form onSubmit={submitForm}>
         <p className='bg-warning text-light rounded'>{loading}</p>
         <p className='bg-danger text-light rounded'>{error}</p>
         <p className='bg-success text-light rounded'>{success}</p>
          
            <input
            type="text"
            className='form-control'
            placeholder='Username'
            value={username}
            onChange={(e) =>setUsername(e.target.value)}
            required />
            <br />
            <input
            type="email"
            className='form-control'
            placeholder='Enter your Email'
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            required/>
            <br />
            <input
            type="password"
            className='form-control'
            placeholder='Enter your password'
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            required/>
            <br />
            <input
            type="tel"
            className='form-control'
            placeholder='Enter your phone number'
            value={phonenumber}
            onChange={(e) =>setPhonenumber(e.target.value)}
            required/>
            <br />
            <button type="submit" className='btn btn-primary'>
                Submit
            </button>
        </form>

        <p>Already have an account? <Link to="/signin">Sign in</Link></p>
        

        </div>
    </div>
  )
}

export default Signup;