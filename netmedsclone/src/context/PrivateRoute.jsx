import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    let isAuth = localStorage.getItem("isLoggedIn") 
    console.log(isAuth, 'auth');
    if(!isAuth) {
        return <Navigate to={'/Login'}/>
    }
    return children;
}
