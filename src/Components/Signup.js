import { navigate } from "raviger";
import React, { useState } from "react";
import { signup } from "../ApiUtils";
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

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      signup(username, password).then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={main}>
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
              <h1>Sign up</h1>
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
                    fontSize: "16px",
                    width: "300px",
                    height: "50px",
                    borderRadius: "60px",
                    boxShadow: "inset 0px 0px 25px 0px #888",
                    border: "none",
                    outline: "none",
                    backgroundColor: "#fff",
                    paddingLeft: "10px",
                  }}
                />

                {/* <input
                  type="text"
                  placeholder="Email id"
                  style={{
                    marginTop: "5px",
                    fontSize: "17px",
                    width: "300px",
                    height: "50px",
                    borderRadius: "60px",
                    boxShadow: "inset 0px 0px 25px 0px #888",
                    border: "none",
                    outline: "none",
                    backgroundColor: "#fff",
                    paddingLeft: "10px",
                  }}
                /> */}
              </div>
              <div>
                {/* <img src={pass} alt="pass" className="email"/> */}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="name"
                  style={{
                    fontSize: "15px",
                    width: "300px",
                    marginTop: "5px",
                    height: "50px",
                    borderRadius: "60px",
                    boxShadow: "inset 0px 0px 25px 0px #888",
                    border: "none",
                    outline: "none",
                    backgroundColor: "#fff",
                    paddingLeft: "10px",
                  }}
                />
              </div>
              <div style={{ paddingTop: "25px" }}>
                <button
                  type="submit"
                  style={{
                    width: "380px",
                    height: "50px",
                    borderRadius: "60px",
                    backgroundColor: "#1E6091",
                    color: "white",
                    fontSize: "25px",
                    border: "none",
                  }}
                >
                <a href="/home">
                Sign up
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
                Already have an account ? <a href="/loginpg">Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
