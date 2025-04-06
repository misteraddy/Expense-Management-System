import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../LoginView.css";
import { validateUser } from "../../Services/LoginService";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const checkLogin = (e) => {
        e.preventDefault();

        validateUser(username, password).then((response) => {
            console.log("Full API Response:", response);
            let category = String(response.data);

            if (category === "Admin" || category === "Customer") {
                localStorage.setItem("userCategory", category);
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("username", username);

                navigate(category === "Admin" ? "/AdminMenu" : "/CustomerMenu");
            } else {
                alert("Wrong User ID or Password");
            }
        });
    };

    return (
        <div className="container">
            <form className="custom-login-container" onSubmit={checkLogin}>
                <h2 className="custom-login-heading">Login</h2>

                <div className="custom-input-box">
                    <input
                        type="text"
                        className="custom-input"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="custom-input-box">
                    <input
                        type="password"
                        className="custom-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="custom-input-box">
                    <input type="submit" className="custom-submit" value="Login" />
                </div>

                <div className="custom-two-col">
                    <label>
                        <input type="checkbox" /> Remember Me
                    </label>
                    <a href="#" className="custom-link">Forgot Password?</a>
                </div>

                <button
                    type="button"
                    className="custom-submit"
                    style={{ marginTop: "10px", width: "100%" }}
                    onClick={() => navigate("/Register")}
                >
                    Register New User
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
