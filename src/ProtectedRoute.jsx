
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import * as jwt from 'jwt-decode'

const ProtectedRoute = ({ children, roles }) => {

  const token = Cookies.get('authToken');

  if (!token) {
    return <Navigate to={'/login'} replace />
  } else {
    const decoded = jwt.jwtDecode(token);
    if (roles && !roles.includes(decoded.role)) {
      return <Navigate to={'/dashboard/forbidden'} replace />
    } else {
      return children 
    }
  }
};


export default ProtectedRoute;
