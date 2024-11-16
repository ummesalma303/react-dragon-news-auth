import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const { users, loader} = useContext(AuthContext);
     useLocation()
    if( loader){
        return <div className='flex flex-col justify-center items-center h-screen'> <span className="loading loading-bars loading-md"></span></div>
    }
    if (users) {
        return children
    }
    return (
        <Navigate state={"/news/0282e0e58a5c404fbd15261f11c2ab6a"} to='/auth/login'></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children:PropTypes.object.isRequired
};

export default PrivateRoutes;