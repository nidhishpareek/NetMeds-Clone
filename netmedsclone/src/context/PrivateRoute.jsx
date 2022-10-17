import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    let isAuth = localStorage.getItem("isLoggedIn") 
    if(!isAuth) {
        return <Navigate to={'/'}/>
    }
    return children;
}
