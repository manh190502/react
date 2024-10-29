import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const res = await callLogin(username, password);

  //   if (res.data) {
  //     localStorage.setItem("access_token", res.data.access_token);

  //     toast.success(res.message, {
  //       position: "top-right",
  //       autoClose: 3000,
  //     });

  //     navigate("/");
  //   } else {
  //     toast.error(res.message, {
  //       position: toast.POSITION.TOP_RIGHT,
  //       autoClose: 3000,
  //     });
  //   }
  // };

  return (
    <div className="form-inner">
      <h3>Login to JobFind</h3>

      {/* <!--Login Form--> */}
      <form
        method="post"
        //  onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account? <Link to="/register">Signup</Link>
        </div>
      </div>
      {/* End bottom-box */}
    </div>
  );
};

export default LoginForm;
