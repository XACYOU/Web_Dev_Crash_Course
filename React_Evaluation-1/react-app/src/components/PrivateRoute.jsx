import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

  const {authDetails} = useContext(AuthContext);

    if (!authDetails.isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  }

export default PrivateRoute
