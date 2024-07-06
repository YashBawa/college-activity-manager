import { useEffect } from "react";
import image from "../Images/404.png";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 | Not FOund";
  });
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <img src={image} width={"50%"} alt="404" />
    </div>
  );
}
