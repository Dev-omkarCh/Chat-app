import React, { useState } from 'react';
import useLogin from '@/hooks/useLogin';

import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import FInput from '@/components/FInput';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {loading,login} = useLogin();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    login(username,password);
  }

  const onChange = (e, field) =>{
      switch(field){
        case "username" : {
          setUsername(e.target.value);
          break;
        }
        case "password" : {
          setPassword(e.target.value);
          break;
        }
      }
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <Toaster />
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body gap-[20px]" onSubmit={handleSubmit}>
              <FInput field={"username"} value={username} handleChange={onChange} />
              <FInput field="password" value={password} handleChange={onChange} type="password" />
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover text-accentColor">
                      Don't have an account, signup?</Link>
              </label>
              <div className="form-control">
              <button className={`${loading && " btn-disabled"} btn btn-primary`} >{loading ? <span className='loading loading-spinner loading-md  text-primary'></span> : "login"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <form action="http://localhost:4000/signup" method='post' className='signup-form flex'>
            <h1>Login</h1>
            <div className='form-data-container flex'>
                    <FInput label="username" />
                    <FInput label="password" type="password"/>
            </div>
            <Link to="/signup">Don't have an account, Signup?</Link>
            <button type='submit'>login</button>
        </form> */}
    </>
  );
};

export default login;
