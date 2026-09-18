import  { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetAccesories = () => {

  const[accesories, setAccesories] = useState([]);

  const[loading, setLoading] = useState("");
  const[error, setError] = useState("");

  const img_url = "https://bug.alwaysdata.net/static/images/"

  const navigate = useNavigate();
  
  const getAccesories = async()=>{
    setLoading('Please wait, We are retrieving the products...');
    try {
      const response = await axios.get("https://bug.alwaysdata.net/api/get_product_details")
      setAccesories(response.data)
      setLoading("")
    } catch(error) {
      setLoading("")
      setError(error.message)
    }
  }
  useEffect(()=>{
     getAccesories()
  },[]
   
  )
  return (
    <div className='row'>
      <h3 className='mt-5'>Available accesories</h3>
      <p className='bg-warning text-light rounded'>{loading}</p>
      <p className='bg-danger text-light rounded'>{error}</p>

      {accesories.map((accesory)=>(
      <div className='col-md-3 justify-content-center mb-4' key={accesory.product_id}>
        <div className='card shadow card-margin'>
          <img 
          src={img_url + accesory.product_photo}
          alt={accesory.product_photo}
          className='product_img mt-4' />
          <div className='card-body'>
            <h4 className='mt-2'>{accesory.product_name}</h4>
            <p className='text-muted'>{accesory.product_description}</p>
            <b className='text-warning'>ksh. {accesory.product_cost}</b><br />
            <button className='btn btn-outline-primary mt-2 w-100'>Add to cart</button><br />
            <button className='btn btn-dark mt-2 w-100' onClick={()=>{navigate("/make-payment",{state:{accesory}})}}>Make Payment</button>
          </div>
          

        </div>
      </div>
       ))}
    </div>
  )
}
export default GetAccesories