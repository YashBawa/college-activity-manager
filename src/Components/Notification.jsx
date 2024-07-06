import { useEffect, useState } from "react";
import Header from "../Common/Header";

export default function Notification() {
  const [toggleDashboard, setToggleDashboard] = useState(false);

  useEffect(() => {
    document.title = "Notifications | Uni Link";
  });

  return (
    <div className="flex">
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
        <p className="text-5xl font-bold">
          <i className="fa fa-bell"></i> Notification
        </p>
        <div className="pt-12 flex flex-wrap font-bold gap-6">
          <div className="bg-[#99D98C] p-4 rounded-lg w-fit text-2xl">
            You have successfully submitted your applicatiom for Web developer
            role at HackClub.
          </div>
          <div className="bg-[#99D98C] p-4 rounded-lg w-fit text-2xl">
            Congratulations, your team won the ideathon: Envisage!
          </div>
          <div className="bg-[#d98c8c] p-4 rounded-lg w-fit text-2xl">
            Unfortunately, your team didn't win the MIC hackathon.
          </div>
        </div>
      </div>
    </div>
  );
}
