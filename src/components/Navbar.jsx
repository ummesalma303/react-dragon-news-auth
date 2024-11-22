import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  // const {user}=useContext(AuthContext)
  const { users:user,logOutUser } = useContext(AuthContext);
  // console.log(users)
  // <script>
  //     AOS.init();
  //   </script>
  return (
       <div className="flex justify-between items-center fade-right ">
      <div className="">
        {
          user ? <h2>{ user?.email}</h2>:' '
        }
      </div>
      <div className="nav space-x-5 ">
        <Link to="/" cl>Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={user?.displayName? user.displayName:userIcon} alt="" />
        </div>
       {
        user?<button onClick={logOutUser} className="btn btn-neutral rounded-none">Log Out</button>:<Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
       }
      </div>
    </div>
  );
};

export default Navbar;
