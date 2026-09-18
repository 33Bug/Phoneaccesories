import  { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAccesories = () => {

  const [accesory_name, setAccesoryName] = useState("");
  const [accesory_description, setAccesoryDescription] = useState("");
  const [accesory_cost, setAccesoryCost] = useState("");
  const [accesory_photo, setAccesoryPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e) =>{
    e.preventDefault();
    setLoading("Please wait as we add your product...")

    try {
      const data =new FormData();
      data.append("product_name", accesory_name);
      data.append("product_description",accesory_description);
      data.append("product_cost", accesory_cost);
      data.append("product_photo",accesory_photo);

      const response =await axios.post("https://bug.alwaysdata.net/api/add_product", data); 
    
      setLoading("");
      setSuccess(response.data.Success);

      setAccesoryName("")
      setAccesoryDescription("")
      setAccesoryCost("")
      // setPhoto("")

      setTimeout(()=>{
        navigate("/");
      }, 1000
      )
    } catch(error) {
      setLoading("")
      setError(error.message)
    }
  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 card shadow p-4'>
        <h1>Add Products</h1>
        <form onSubmit={submitForm}>
          <p className='bg-warning text-light rounded'>{loading}</p>
          <p className='bg-danger text-light rounded'>{error}</p>
          <p className='bg-success text-light rounded'>{success}</p>
      
          <input 
          type="text"
          placeholder='Enter product name here'
          className='form-control'
          value={accesory_name}
          onChange={(e) => setAccesoryName(e.target.value)}
          required />
          <br />
          <textarea
          placeholder='Enter your product description'
          className='form-control'
          value={accesory_description}
          onChange={(e) => setAccesoryDescription(e.target.value)}
          required>
          </textarea>
          <br />
          <input 
          type="number"
          placeholder='Enter your product cost'
          className='form-control'
          value={accesory_cost}
          onChange={(e) => setAccesoryCost(e.target.value)}
          required />
          <br />
          <b>Browse / Upload product Image: </b>
          <input 
          type="file"
          accept='image/*'
          onChange={(e) => setAccesoryPhoto(e.target.files[0])}
          className='form-control'
          required />
          <br />
          <button type='submit' className='btn btn-primary'>
            Upload

          </button>
          
        </form>
      </div>
    </div>
  )
}
export default AddAccesories;