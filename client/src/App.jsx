
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";
 import Home from "@/pages/Home.jsx";           
import Register from "@/pages/Register.jsx";   
import Login from "@/pages/Login.jsx";  
import axios from 'axios';     
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext' 
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true
function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <Navbar />
      <Toaster position ='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<dashboard />} />
      </Routes>
    </div>
    </UserContextProvider>
  );
}

export default App;
