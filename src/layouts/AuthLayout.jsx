import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <div className='pt-2'>
           <Navbar></Navbar>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;