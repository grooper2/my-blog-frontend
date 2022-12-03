import { ReactComponent as Blob } from "../../Assets/Icons/blob-right.svg";
import { useContext, useState } from "react";
import { AdminRepository } from "../../Api/AdminRepo";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userProvider";

function LoginPage() {
  const { setUser } = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState({});

  const navigate = useNavigate()

  const onChangeUsername = async (e) => {
    setRes({})
    setUsername(e.target.value);
  };

  const onChangePassword = async (e) => {
    setRes({})
    setPassword(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
        setRes({error: "Missing field"})
    } else {
      await submitForm();
    }
  };

  const submitForm = async () => {
      const res = await AdminRepository.login({
        name: username,
        password: password
      });
      if(res.isAuthenticated === true){
        setUser(res)
        navigate("/library")
      }
      setRes(res)
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="login-body">
        <div className="login-card">
          <input
            type="text"
            id="username-input"
            className="Input-text"
            placeholder="Username..."
            value={username}
            onChange={onChangeUsername}
          />
          <input
            type="password"
            id="password-input"
            className="Input-text"
            placeholder="Password..."
            value={password}
            onChange={onChangePassword}
          />
          {res && (
            <p className="error-msg">{res.error}</p>
          )}
          <button className="btnLogin" type="submit">
            Login
          </button>
        </div>
        <Blob />
      </div>
    </form>
  );
}

export default LoginPage;
