//import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate} from 'react-router-dom'
export default function Register() {
  const navigate = useNavigate()
  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
  })
  
  const registerUser = async (e) => {
    e.preventDefault();
    const {name ,email ,password} = data
    try {
      const { data } = await  axios.post('/Register',{
        name ,email,password

      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Login Successfully,Welcome!')
        navigate('/Login')
      }
    } catch (error){
      console.log(error)

    }

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={registerUser} style={{ width: '300px' }}>
        <label>Name</label>
        <input type='text' placeholder="Enter name..."  value={data.name}  onChange={(e) => setData({...data,name:e.target.value})} style={{ marginBottom: '10px', width: '100%' }} />
        <label>Email</label>
        <input type='email' placeholder="Enter email..." value={data.email}  onChange={(e) => setData({...data,email:e.target.value})} style={{ marginBottom: '10px', width: '100%' }} />
        <label>Password</label>
        <input type='password' placeholder="Enter password..." value={data.password}  onChange={(e) => setData({...data,password:e.target.value})} style={{ marginBottom: '10px', width: '100%' }} />
        <button type='submit' style={{ width: '100%' }}>Submit</button>
      </form>
    </div>
  );
}
