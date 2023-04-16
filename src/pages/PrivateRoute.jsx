import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuth0();

    return isAuthenticated && user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
