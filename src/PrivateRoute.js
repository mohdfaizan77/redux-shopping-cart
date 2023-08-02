// import React from 'react';
// import { Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user.user);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user.name !== 'Guest' ? <Component {...props} /> : navigate('/login')
//       }
//     />
//   );
// };

// export default PrivateRoute;
