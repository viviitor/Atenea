import {Navigate} from "react-router-dom";

const RouteSecurity = ({ log, children }) => {
    if (!log) {
        console.log("Usuario no autenticado");
        return <Navigate to={"/"}/>
    }

    return children;
}

export default RouteSecurity;