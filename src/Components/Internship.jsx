import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../Common/Header";

export default function Internship() {
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const students = [
    {
      name: "Pupilfirst",
      description: "Web developer internship for VIT students",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/i3xzzjzaczqepsf9okmv",
      connected: true,
    },
    {
      name: "Google STEP",
      description: "App developer only for 2nd year VIT students",
      image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      connected: true,
    },
    {
      name: "Microsoft Explore",
      description: "Django Backend developer",
      image:
        "https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297-300x297.jpg",
      connected: false,
    },
    {
      name: "Infosys",
      description: "React Developer",
      image:
        "data:image/jpeg;base64,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",
      connected: false,
    },
    {
      name: "Accenture",
      description: "Frontend developer",
      image:
        "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png",
      connected: true,
    },
    {
      name: "CoinDCX",
      description: "UI/UX designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmwXxlgFLFr5T8cNoDXKo6f9AXgle-ezhOGKUyPhLULiTJTgBmVUAgmjvFFVNGcQqXus&usqp=CAU",
      connected: true,
    },
  ];

  useEffect(() => {
    document.title = "Internship | Uni Link";
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
        <p className="text-5xl font-bold pb-4">
          <i className="fas fa-user-tie"></i>
          &nbsp; Internship
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 justify-center items-center bg-[#8ce492] p-6 px-16 w-full md:w-1/4 flex-grow rounded-lg shadow-xl">
            <p className="text-7xl font-bold text-[#184E77]">{5}</p>
            <p className="text-[#0075A2]">Active Internships</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center  bg-[#ADF5FF] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow-xl">
            <p className="text-7xl font-bold text-[#184E77]">{9}</p>
            <p className="text-[#34A0A4]">Expired Internships</p>
          </div>
        </div>
        <div>
          <div className="flex justify-end p-2 pt-4">
            <Button variant="contained">
              <i className="fa fa-plus"></i>&nbsp; Add New Intership
            </Button>
          </div>
          <div className="pt-4 grid md:grid-cols-2 grid-cols-1 gap-4">
            {students.map((student) => (
              <div className="flex gap-4 bg-blue-200 rounded-lg p-2 relative shadow hover:shadow-xl transition duration-300">
                <div className="flex items-center">
                  <img
                    src={student.image}
                    alt="profile"
                    className="rounded-full p-4"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-xl flex items-center w-1/3">
                  {student.name}
                </div>
                <div className="flex items-center w-1/3">
                  {student.description}
                </div>
                <div className="flex items-center">
                  <Button variant="contained" color="secondary">
                    Apply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
