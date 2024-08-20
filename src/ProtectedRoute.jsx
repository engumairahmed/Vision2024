// import React from 'react'
// import { Route } from 'react-router-dom'
// import Cookies from 'js-cookie'

// export const ProtectedRoute = ({path,element}) => {
//     const token = Cookies.get('authToken');
//     if (token) {
//         return(
//          <Route path=></Route>
//         )
//     };
// }

import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, roles,user, ...rest }) => {

  return (
    <Route {...rest} render={(props) => {
      if (!user) {
        return <Redirect to='/login' />;
      }

      if (roles && !roles.includes(user.role)) {
        return <Redirect to='/' />;
      }

      return <Component {...props} />;
    }} />
  );
};

export default ProtectedRoute;
