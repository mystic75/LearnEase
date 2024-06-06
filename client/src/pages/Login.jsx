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
    <label>Email</label>
    <input type='email' placeholder="Enter email..." value={data.email}  onChange={(e) => setData({...data,email:e.target.value})} style={{ marginBottom: '10px', width: '100%' }} />
    <label>Password</label>
    <input type='password' placeholder="Enter password..." value={data.password}  onChange={(e) => setData({...data,password:e.target.value})} style={{ marginBottom: '10px', width: '100%' }} />
    <button type='submit'>Submit</button>
    </form></div>
  )
}
