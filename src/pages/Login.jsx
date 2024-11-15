import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {signInUser,setUser} = useContext(AuthContext)
    const navigate =useNavigate()

    // console.log(text);
    const handleForm=e=>{
      e.preventDefault()
      const form = new FormData(e.target)
      
      const email= form.get("email")
      const password= form.get("password")
      signInUser(email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        navigate('/')

      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-[90vh]">
            <div className="card bg-base-300 w-full max-w-lg mx-auto shrink-0 p-6 text-center rounded-none">
            <h2 className="text-xl">Login Your Account</h2>

      <form onSubmit={handleForm}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
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