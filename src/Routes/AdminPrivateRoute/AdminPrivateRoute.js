import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import Spinner from "../../Shared/Spinner/Spinner";

const AdminPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminPrivateRoute;