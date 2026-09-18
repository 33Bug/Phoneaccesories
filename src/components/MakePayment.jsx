import axios from 'axios';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

const MakePayment = () => {
  const{accesory} = useLocation().state || {};

  const img_url = "https://bug.alwaysdata.net/static/images/"

  const[phonenumber, setPhonenumber] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitForm = async (e) =>{
    e.preventDefault();
    setLoading("Please wait as we process your payment...")

try {
  const data = new FormData();
  data.append("phone", phonenumber);
  data.append("amount", accesory.product_cost);
  
  const response = await axios.post("https://bug.alwaysdata.net/api/mpesa_payment", data)

  setLoading("");
  setSuccess(response.data.message);
  
} catch (error) {
  setLoading("");
  setError(error.message);
  
}}

  
  
  
  return (
    <div className='row justify-content-center mt-4'>
      <h1>Make Payment-Lipa na Mpesa</h1>
      <div className='col-md-3 card shadow card-margin p-5'>
        <img
        src={img_url + accesory.product_photo}
        alt={accesory.product_photo}
        className='product_img rounded' />

        <h4 className='text-info text-start'>{accesory.product_name}</h4>
        <p className='test-start'>{accesory.product_description}</p>
        <b className='text-warning text-start'>{accesory.product_cost}</b>

        <form onSubmit={submitForm}>
          <p className='bg-warning text-light rounded'>{loading}</p>
          <p className='bg-danger text-light rounded'>{error}</p>
          <p className='bg-success text-light rounded'>{success}</p>

          <input 
          type="tel"
          placeholder='Enter your phone number (2547xxxxxxxx)'
          className='form-control'
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
           />
           <br/>
           <button className='btn btn-success w-100 '>
            Make Payment
           </button>



        </form>
      </div>

    </div>
  )
}

export default MakePayment;