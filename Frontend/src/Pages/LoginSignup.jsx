import React, { useEffect, useState } from 'react';
import './CSS/login-sinup.css';
import axios from 'axios';
import { API_BASE_URL } from '../confij';
import { toast, Bounce } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../ReduxToolkit/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import UserLayout from '../Components/UserLayout/UserLayout';




const LoginSignup = () => {
  const [page, setpage] = useState("Login");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.userslice.user);
  // console.log(user);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!Name || !email || !password) {
      return alert("Please enter all fields")
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, { name: Name, email, password });
      // console.log(response);
      if (response.status === 201) {
        localStorage.setItem("jwt", response.data.token);
        const user = response.data.user;
        dispath(addUser(user));
        toast.success('🦄 Signup sucessfully ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("login error", error);
      toast.error(
        <div>
          <p>
            🦄 {error.response.data.message} <br />
            <button className='btn btn-primary' onClick={() => setpage('Login')}>login here</button>
          </p>
        </div>,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        }
      );
    } finally {
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please enter all fields")
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
      // console.log(response.data.user);
      if (response.status === 200) {
        localStorage.setItem("jwt", response.data.token);
        const user = response.data.user;
        dispath(addUser(user));
        toast.success('🦄 Login sucessfully ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("login error", error);
    }
  };

  useEffect(() => {
    const checkUserLogin = () => {
      const loginUser = localStorage.getItem('jwt');
      if (loginUser) {
        user.isAdmin ? navigate('/admin/addproduct') : navigate('/')
      }
    }
    checkUserLogin();
  }, [navigate,user.isAdmin]);

  return (
    <UserLayout>
      <div className='login-signup'>
        <div className="login-signup-container">
          <h1>{page}</h1>
          <div className='login-signup-feilds'>
            {page === 'Sign up' && <input type="text" placeholder='Your Name' value={Name} onChange={(e) => setName(e.target.value)} />}
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={(e) => { page === 'Sign up' ? handleSignUp(e) : handlelogin(e) }} >Continue</button>
          {page === 'Sign up' ? <p onClick={() => setpage("Login")} className="loginsignup-login">Already have an account <span >Login </span> </p> : <p onClick={(e) => setpage("Sign up")} className="loginsignup-login">Dont have an account <span >Sign up </span> </p>}

          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy police.</p>
          </div>
        </div>
      </div>
    </UserLayout>

  )
}

export default LoginSignup