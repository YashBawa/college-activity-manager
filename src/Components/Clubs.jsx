import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getClubs } from "../ApiUtils";
import Header from "../Common/Header";

export default function Clubs() {
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    getClubs().then((data) => {
      console.log(data);
      setClubs(data);
    });
    document.title = "Clubs | Uni Link";
  }, []);

  const students = [
    {
      name: "E-cell Club",
      description: "Virtual Event",
      image:
        "https://i.pinimg.com/originals/76/c8/88/76c8880774a07f9ae00f74a2de797c9c.png",
      connected: true,
    },
    {
      name: "Android Club",
      description: "VITrendz",
      image:
        "https://dynamic.brandcrowd.com/asset/logo/5b592148-fbea-407f-ad15-b0f89e11062c/logo-search-grid-1x?v=637919176614870000",
      connected: true,
    },
    {
      name: "Microsoft Innovation Club",
      description: "Microsoft Innovations Club",
      image:
        "https://img.favpng.com/22/21/9/hackathon-computer-programming-logo-technology-software-developer-png-favpng-Wh6VQxmJ8HBSub03gNxGFK60c.jpg",
      connected: false,
    },
    {
      name: "GDSC Club",
      description: "Google Developers Student Club",
      image: "https://miro.medium.com/max/400/1*ovIa1El69EPsMeg6IR-PFg.png",
      connected: false,
    },
    {
      name: "Biosphere Club",
      description: "Cyscom Club",
      image:
        "https://i.pinimg.com/originals/76/c8/88/76c8880774a07f9ae00f74a2de797c9c.png",
      connected: true,
    },
    {
      name: "Newton Club",
      description: "VITFAM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSlnHklGa_3HZU93Q0BkB--4I1tRCIvaVyA&usqp=CAU",
      connected: true,
    },
  ];

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
          <i class="fa-solid fa-hotel"></i>
          &nbsp; Clubs
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 justify-center items-center bg-[#8ce492]  p-6 px-16 w-full md:w-1/4 flex-grow rounded-lg shadow-xl">
            <p className="text-7xl font-bold text-[#184E77]">{23}</p>
            <p className="text-[#0075A2]">Active Events</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[#ADF5FF] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow-xl">
            <p className="text-7xl font-bold text-[#184E77]">{21}</p>
            <p className="text-[#34A0A4]">Closed Events</p>
          </div>
        </div>
        <div>
          <div className="flex justify-end p-2 pt-4">
            <Button variant="contained">
              <i className="fa fa-plus"></i>&nbsp; Host New Event
            </Button>
          </div>
          <div className="pt-8 grid md:grid-cols-2 grid-cols-1 gap-4">
            {clubs.map((club) => (
              <div className="flex gap-4 bg-blue-200 rounded-lg p-2 relative shadow hover:shadow-xl transition duration-300">
                <div className="flex items-center">
                  {/* <img
                    src={student.image}
                    alt="profile"
                    className="rounded-full p-4"
                    width={100}
                    height={100}
                  /> */}
                </div>
                <div className="text-xl flex items-center w-1/3 font-bold">
                  {club.name}
                </div>
                <div className="flex items-center w-1/3">
                  Size: {club.numberOfMembers}
                </div>
                <div className="flex items-center">
                  <Button variant="contained" color="secondary">
                    <a href={`/club/${club._id}/`}>View</a>
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
