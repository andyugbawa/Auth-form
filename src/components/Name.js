import React from 'react'
import './Name.css'
import { useState } from 'react';
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

// console.log(auth);

 


function Name() {

    const [userCredentials,setUserCredentials] = useState({});
    const [error, setError] =useState("")



      function handleCredentials(e){
       setUserCredentials({...userCredentials,[e.target.name]:e.target.value})
    //    console.log(userCredentials)
      }

      function handleSignUp(e){
         e.preventDefault();
         
         createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
  })
    .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message
    setError(error.message)
    // console.log(errorCode)
    // console.log(errorMessage)
   
  });
}

function handleSignIn(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(error.message)
    console.log(errorCode)
    console.log(errorMessage)
  });
}

  return (
    <div className='container'>
        <div className='form-content'>

            <h1>Login Form</h1>
            <form>
                <div>
                    <input onChange={(e)=>{handleCredentials(e)}} type="email" placeholder='email' name="name" />
                </div>
                <div>
                    <input onChange={(e)=>{handleCredentials(e)}} type="password" placeholder='password' name="password"/>
                </div>
                {
                    error &&
                 <div className='error'>
                    {error}
                 </div>
                }
                <button onClick={(e)=>{handleSignUp(e)}} id="signUp">SignUp</button>
                <button onClick={(e)=>{handleSignIn(e)}} id="signIn">SignIn</button>
            </form>
        </div>
    </div>
  )
}

export default Name
