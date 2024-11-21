import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;