import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";
import LoginForm from "./login-form";

const Login = () => {
    const history = useHistory();
    const [disabled, setDisabled] = useState(false);
    const [user, setUser] = useContext(UserContext);

    // If user is already logged in: redirect to profile page

    return (
        <div>
            Login
        </div>       
    )
}

export default Login;