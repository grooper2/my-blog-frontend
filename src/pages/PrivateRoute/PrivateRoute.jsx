import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AdminRepository } from "../../Api/AdminRepo";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(()=> {
    const res = async () => {
        const isUserAuthenticated = await AdminRepository.isAuthenticated();
        localStorage.setItem("accessToken", isUserAuthenticated.accessToken);
        localStorage.setItem("refreshToken", isUserAuthenticated.refreshToken);

        setIsAuthenticated(isUserAuthenticated?.accessToken && !isUserAuthenticated?.error ? children : <Navigate to="/login" />)
      };
      res()
  },[])

  return isAuthenticated
};

export default PrivateRoute;
