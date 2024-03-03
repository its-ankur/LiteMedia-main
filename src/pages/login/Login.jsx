import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import React, { useState } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  }
  /* const handleLogin = () => {
     login();
     navigateHome();
     
   };
 */
  const [inpval, setInpval] = useState({
    name: "",
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

  const addData = (e) => {
    e.preventDefault();
    const { name, password } = inpval;
    if (name === "") {
      alert("name field is required");
    }
    if (password === "") {
      alert("password field is required");
    }
    else if (name !== "" && password !== "") {
      login();
      navigateHome();
    }
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello User!</h1>
          <p>
            Welcome to LiteMedia!!!
          </p>
          <p>
            Have a great day!!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" name="name" onChange={getdata} placeholder="Username" />
            <input type="password" name="password" onChange={getdata} placeholder="Password" />
            <button onClick={addData}>Login</button>

            <Routes>
              <Route path="./home/Home/*" element={<Home />} />
            </Routes>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;