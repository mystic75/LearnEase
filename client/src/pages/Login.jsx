//import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const [data,setData]=useState({
    email:'',
    password:'',
  })
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser= async(e)=>{
    e.preventDefault()
    const{email,password}= data
    try {
      const {data} = await axios.post('/Login',{
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        navigate('/dashboard')
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}