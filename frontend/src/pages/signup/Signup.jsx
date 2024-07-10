import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useSignup from '../../hooks/useSignup';
import FInput from '@/components/FInput';
import Gender from '../../components/Gender';

const Signup = () => {

  const [inputs,setInputs] = useState({
      fullName : "",
      gender : "",
      username : "",
      email : "",
      password : "",
      confirmPassword : "",
  });
  const {loading, signup} = useSignup();

  // handlers
  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    // signups User
    signup(inputs);
  };

  const onChange = ( e, field ) =>{

    switch(field){
        case "fullname": {
          setInputs( prev => {
            return {
              ...prev,
              fullName : e.target.value
            }
          });
          break;
        }
        case "username": {
          setInputs( prev => {
            return {
              ...prev,
              username : e.target.value
            }
          });
          break;
        }
        case "email": {
          setInputs( prev => {
            return {
              ...prev,
              email : e.target.value
            }
          });
          break;
        }
        case "password": {
          setInputs( prev => {
            return {
              ...prev,
              password : e.target.value
            }
          });
          break;
        }
        case "confirm password": {
          setInputs( prev => {
            return {
              ...prev,
              confirmPassword : e.target.value
            }
          });
          break;
        }
    }
  }

  const handleGender = ( gender ) =>{
    setInputs( prev =>{
      return {
        ...prev, gender
      };
    });
  };


  return (
    <>
        <div className="hero min-h-screen bg-base-200">
          <Toaster />
        <div className="hero-content w-[100%] h-[100%] ">
          <div className="card shrink-0 w-[90%] h-[90%] shadow-2xl bg-base-100 sm:max-w-sm">
              <form className="card-body gap-[20px]" onSubmit={handleSubmit}>
                
                  <FInput field="fullname" value={inputs.fullName} handleChange={onChange} />
                  <Gender selectGender={handleGender} />
                  <FInput field="username" value={inputs.username} handleChange={onChange} />
                  <FInput field="email" value={inputs.email} handleChange={onChange} />
                  <FInput field="password" value={inputs.password} handleChange={onChange} type="password" />
                  <FInput field="confirm password" value={inputs.confirmPassword} handleChange={onChange} type="password" />

                    <label className="label">
                      <Link to="/login" className="label-text-alt link link-hover text-accentColor">
                      Already have an account, login?</Link>
                    </label>
                  <div className="form-control">
                    <button className={`${loading && " btn-disabled"} btn btn-primary`} >{loading ? <span className='loading loading-spinner loading-md  text-primary'></span> : "Sign up"}</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;