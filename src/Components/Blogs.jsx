import { useState } from "react";
import Header from "../Common/Header";
import { Button } from "@mui/material";
import SlideBar from "../Common/Elements/SlideBar";
import { useEffect } from "react";

export default function Blogs() {
  const [toggleDashboard, setToggleDashboard] = useState(false);

  useEffect(() => {
    document.title = "Blogs | Uni-Link";
  }, []);

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
        <p className="text-5xl font-bold pb-4">
          <i className="fas fa-book-open"></i>
          &nbsp; Blogs
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 justify-center items-center bg-[#8ce492] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow-xl">
            <p className="text-7xl font-bold text-[#184E77]">{12}</p>
            <p className="text-[#3c0e0e]">Published blogs</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[#ADF5FF] p-6 px-16 w-full md:w-1/4 flex-grow rounded-lg shadow-xl">
            <p className="text-7xl font-bold text-[#184E77]">{32}</p>
            <p className="text-[#0075A2]">Total blogs</p>
          </div>
        </div>
        <div>
          <div className="flex justify-end p-2">
            <Button variant="contained">
              <i className="fa fa-plus"></i>&nbsp; New Blog
            </Button>
          </div>
          <div className="w-full pt-4">
            <SlideBar className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
