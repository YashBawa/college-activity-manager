import { useEffect, useState } from "react";
import one from "../Images/1.png";
import Header from "../Common/Header";

export default function Profile() {
  const [toggleDashboard, setToggleDashboard] = useState(false);

  useEffect(() => {
    document.title = "Profile | Uni Link";
  });

  return (
    <div className="flex bg-gray-100">
      <div className={`${toggleDashboard ? "absolute" : ""} p-4 md:hidden`}>
        <i
          className={`${
            toggleDashboard ? "fa fa-remove" : "fa fa-bars text-[#184E77]"
          } relative text-[#D9ED92]`}
          onClick={() => setToggleDashboard(!toggleDashboard)}
        ></i>
      </div>
      <div className="min-h-screen">
        <Header toggleDashboard={toggleDashboard} />
      </div>
      <div className="p-4 w-full text-[#184E77]">
        <div>
          <p className="text-5xl font-bold">
            <i className="fa fa-user"></i> Profile
          </p>
          <div className="flex justify-center gap-6 pt-12">
            <div>
              <img
                src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1377d4/_orig/pixomatic_1572877223091.png"
                alt=""
                width={200}
                height={200}
                className="rounded-full"
              />
              <div className="flex items-center justify-center">
                <img src={one} width={100} height={100} alt="" />
              </div>
            </div>
            <div>
              <div className="p-6 text-2xl flex flex-col gap-6 pt-12">
                <p>
                  Name: <b>{"Yash Bawa"}</b>
                </p>
                {/* <p>
                  School: <b>{"SCOPE"}</b>
                </p> */}
                <p>
                  Major: <b>CSE Core</b>
                </p>
                <p>
                  College: <b>{"VIT, Chennai"}</b>
                </p>
                <p>
                  Hackathons:<b>{"Meso Hack,Unfold 2022,Cyber-O-Day"}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
