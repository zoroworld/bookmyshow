import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {GetCurrentUser} from '../api/users';

function ProtectedRoute({ children }){

  const navigate = useNavigate();
  //all the logic for validation and redirection

  function getValidUser(){
      try {
        const response = GetCurrentUser();
        response.then((data) => {
          console.log(data);
        });
        
        return response.data;
      } catch (error) {
         console.error(error);
         navigate('/login');
      }
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      getValidUser();
    } else {
      navigate('/login');
    }
  },[]);

  // console.log(children);
  
  return(
    <>
       <div>
        {children}
       </div>
    </>
  )
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default ProtectedRoute;