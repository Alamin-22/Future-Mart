import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();


    if (user) {
        return children;
    }
    return <Navigate  to={"/"}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;