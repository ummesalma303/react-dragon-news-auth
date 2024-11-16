import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {signInUser,setUser,resetPassword} = useContext(AuthContext)
    const [error,setError]=useState([])
    const emailRef=useRef()
    const navigate =useNavigate()
    const location = useLocation()

    const handleForm=e=>{
      e.preventDefault()
      const form = new FormData(e.target)
      
      const email= form.get("email")
      const password= form.get("password")
      signInUser(email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        console.log(user);

        navigate(location?.state?location?.state:'/')

      })
      .catch((err) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(err.code)
        // console.log(errorMessage);
      });
    }
    // console.log();
    // const resetPassword=()=>{
      
    // }

    return (
        <div className="flex flex-col justify-center items-center min-h-[90vh]">
            <div className="card bg-base-300 w-full max-w-lg mx-auto shrink-0 p-6 text-center rounded-none">
            <h2 className="text-xl">Login Your Account</h2>

      <form onSubmit={handleForm}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" onClick={()=>resetPassword(emailRef.current.value)} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {
            error&&<label className="label">
            <p className="label-text-alt link link-hover text-red-500">{error}</p>
          </label>
          }
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
        <label className="label">
            <p className="label-text-alt link link-hover">Don&#39;t Have An Account <Link to="/auth/register"><span  className="text-red-500 font-bold">Register</span></Link> </p>
          </label>
      </form>
    </div>
        </div>
    );
};

export default Login;