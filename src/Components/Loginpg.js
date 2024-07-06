import { flexbox } from "@mui/system";
import { navigate } from "raviger";
import React, { useState } from "react";
import { login } from "../ApiUtils";
import Image from "../Images/account_image.jpg";
import email from "../Images/email.jpg";
import preview from "../Images/preview.png";

const main = {
  height: "100vh",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  paddingRight: "0px",
  backgroundImage:"linear-gradient(#82CAFF,#CBC3E3)",
};

const submain = {
  display: "flex",
  justifyContent: "center",
  height: "550px",
  width: "35%",
  boxShadow: "5px 6px  7px 6px #168AAD",
  paddingTop: "30px",
  borderRadius: "60px",
  backgroundImage: "linear-gradient(#00ccff,violet)",
};
const profile = {
  height: "100px",
  width: "100px",
  borderRadius: "130px",
};
export default function Loginpg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(username, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate(`/home`);
      } else {
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div style={main} className="min-h-screen">
        <div className="flex justify-left ">
          <img src={preview}></img>
        </div>
        <div style={submain}>
          <div>
            <div
              style={{
                paddingTop: "20px",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(223, 221, 221)",
                  borderRadius: "150px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  height: "115px",
                  width: "115px",
                }}
              >
                <img src={Image} style={profile} alt="profile" />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <h1>Login Page</h1>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <img
                    src={email}
                    alt="email"
                    style={{
                      height: "25px",
                      width: "25px",
                      position: "relative",
                      padding: "14px 0 0 25px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                      fontSize: "20px",
                      width: "300px",
                      height: "50px",
                      borderRadius: "60px",
                      boxShadow: "inset 0px 0px 25px 0px #888",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#fff",
                      paddingLeft: "0px",
                    }}
                  />
                </div>
                <div style={{ paddingtop: "20px" }}>
                  {/* <img src={pass} alt="pass" className="email"/> */}
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="name"
                    style={{
                      width: "300px",
                      marginTop: "5px",
                      height: "50px",
                      borderRadius: "60px",
                      boxShadow: "inset 0px 0px 25px 0px #888",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#fff",
                      paddingLeft: "0px",
                    }}
                  />
                </div>
                <div style={{ paddingTop: "25px" }}>
                  <button
                    type="submit"
                    style={{
                      width: "300px",
                      height: "50px",
                      borderRadius: "60px",
                      backgroundColor: "#1E6091",
                      color: "white",
                      fontSize: "25px",
                      border: "none",
                    }}
                  >
                    <a
                      href="/home"
                      className="hover:text-blue-900 hover:font-bold"
                    >
                      Login
                    </a>
                  </button>
                </div>

                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "25px",
                    fontWeight: "300",
                  }}
                >
                  New user?{" "}
                  <a
                    href="/signup"
                    className="hover:text-blue-900 hover:font-bold"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
