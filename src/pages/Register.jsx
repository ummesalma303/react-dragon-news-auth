import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {createNewUser,setUser}=useContext(AuthContext)
    const [error,setError,updateUser]=useState([])
    const navigate =useNavigate()

    const handleForm=e=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const name= form.get("name")
        const email= form.get("email")
        const password= form.get("password")
      const photo = form.get("photo")
      createNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/')
        setUser(user)
        console.log(user);
        const infoData ={
          displayName:name,
          photoURL:photo
        }
        console.log(infoData);

        updateUser(infoData)
        .then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
        // console.log(info);
        e.target.reset()
      })
      .catch((err) => {
        const errorCode = err.code;
        setError(errorCode)
      });

     
    }
    return (
        <div className="flex flex-col justify-center items-center my-4">
            <div className="card bg-base-300 w-full max-w-lg mx-auto shrink-0 p-6 text-center rounded-none">
            <h2 className="text-xl">Register Your Account</h2>

      <form onSubmit={handleForm} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
         {
          error&& <label className="label">
          <p className="label-text-alt link link-hover text-red-500">{error}</p>
        </label>
         }
        </div>
        <div className="form-control ">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
        <label className="label">
            <p className="label-text-alt link link-hover">Already Have An Account.Please <Link to="/auth/Login"><span  className="text-red-500 font-bold">Register</span></Link> </p>
          </label>
      </form>
    </div>
        </div>
    );
};

export default Register;