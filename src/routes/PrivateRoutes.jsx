import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const { users} = useContext(AuthContext)
    if (users) {
        return children
    }
    console.log(users)
    return (
        <Navigate to='/auth/login'></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children:PropTypes.object.isRequired
};

export default PrivateRoutes;