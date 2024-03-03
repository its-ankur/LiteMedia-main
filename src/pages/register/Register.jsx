//import { useContext } from "react";
import { Link } from "react-router-dom";
//import { AuthContext } from "../../context/authContext";
import "./register.scss";
// import { useNavigate, Routes, Route } from "react-router-dom";
// import Home from "../home/Home";
import React, { useState } from "react";


const Register = () => {

    // const { register } = useContext(AuthContext);

    // const navigate = useNavigate();
    // const navigateHome = () => {
    //     navigate('/');
    // }

    const [inpval, setInpval] = useState({
        username: "",
        name: "",
        email: "",
        password: ""
    })
    console.log(inpval);

    const getdata = (e) => {
        //console.log(e.target.value);
        const { value, name } = e.target;
        //console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = () => {
        //e.preventDefault();
        const { name, password, username, email } = inpval;
        if (username === "") {
            alert("username field is required");
        }
        else if (name === "") {
            alert("Name field is required");
        }
        else if (email === "") {
            alert("email field is required");
        }
        else if (password === "") {
            alert("password field is required");
        }
        else if (!email.includes("@")) {
            alert("please enter valid email address");
        }
        // else if (name !== "" && password !== "") {
        //     register();
        //     navigateHome();
        // }

        //1inpval.name="";
        const a1 = document.getElementById('a1');
        a1.innerHTML = "";
        const a2 = document.getElementById('a2');
        a2.innerHTML = "";
        const a3 = document.getElementById('a3');
        a3.innerHTML = "";
        const a4 = document.getElementById('a4');
        a4.innerHTML = "";
        // email.target.value="";
        // password.target.value="";
        // register();
        // navigateHome();
    }


    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Lite Media.</h1>
                    <p>Welcome to LiteMedia!! 
                    </p>
                    <p>How are you today?
                    </p>
                    <p>Have a great journey with LiteMedia.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input id="a1" type="text" name="username" onChange={getdata} placeholder="Username" />
                        <input id="a2" type="text" name="name" onChange={getdata} placeholder="Name" />
                        <input id="a3" type="email" name="email" onChange={getdata} placeholder="Email" />
                        <input id="a4" type="password" name="password" onChange={getdata} placeholder="Password" />
                        <button onClick={addData}>Register</button>
                        {/* <Routes>
                            <Route path="./home/Home/*" element={<Home />} />
                        </Routes> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;