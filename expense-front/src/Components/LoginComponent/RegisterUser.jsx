import React, { useState } from "react";
import { registerNewUser } from "../../Services/LoginService";
import { useNavigate } from "react-router-dom";
import "../../LoginView.css";

const RegisterUser = () => {
    const [expenseUser, setExpenseUser] = useState({
        username: "",
        password: "",
        email: "",
        category: "",
    });

    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();

    const saveNewUser = (event) => {
        event.preventDefault();
        if (expenseUser.password.length < 5 || expenseUser.password.length > 10) {
            alert("Password must be between 5 to 10 characters long");
            return;
        }
        if (expenseUser.password === password2) {
            registerNewUser(expenseUser).then(() => {
                alert("User is registered successfully! Please log in.");
                navigate("/");
            });
        } else {
            alert("Passwords do not match");
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setExpenseUser((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container">
            <div className="custom-login-container">
                <h2 className="custom-login-heading">Register</h2>
                <form onSubmit={saveNewUser}>
                    <div className="custom-input-box">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            className="custom-input"
                            value={expenseUser.username}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>
                    <div className="custom-input-box">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="custom-input"
                            value={expenseUser.password}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>
                    <div className="custom-input-box">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="custom-input"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            required
                        />
                    </div>
                    <div className="custom-input-box">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            className="custom-input"
                            value={expenseUser.email}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>
                    <div className="custom-input-box">
                        <select
                            name="category"
                            className="custom-input"
                            value={expenseUser.category}
                            onChange={onChangeHandler}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className="custom-submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;
