import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Utilities/Context/UserContext';
import LoaderSpin from '../Utilities/Loader/LoaderSpin';


const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContext);
    const location=useLocation();
    if(loader)
    {
        return <LoaderSpin></LoaderSpin>;
    }
    if(user && user.uid)
    {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;