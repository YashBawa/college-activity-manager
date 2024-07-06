export default function About() {
  const coFounders = [
    {
      name: "Pranshu Aggarwal",
      designation: "Co-Founder",
      image: "https://avatars.githubusercontent.com/u/70687348?v=4",
    },
    {
      name: "Raghav Matta",
      designation: "Co-Founder",
      image: "https://avatars.githubusercontent.com/u/94173505?v=4",
    },
    {
      name: "Yash Bawa",
      designation: "Co-Founder",
      image: "https://avatars.githubusercontent.com/u/90853282?v=4",
    },
  ];
  return (
    <div className="p-4">
      <div className="text-blue-500 text-6xl font-bold">About Us</div>
      <div>
        <p className="text-xl pt-2">The connection which every college needs.</p>
        <p className="text-2xl font-bold pt-6">Our team</p>
        <div className="flex flex-col md:flex-row gap-4">
          {coFounders.map((founder) => (
            <div className="p-2 rounded-lg bg-blue-200 shadow w-full md:w-1/3 justify-center items-center hover:scale-105 transition duration-300">
              <div className="flex flex-col justify-center items-center">
                <img src={founder.image} alt={founder.name} className="rounded-full" width={"100"} />
                <p className="text-5xl font-medium">{founder.name}</p>
                <p className="text-3xl">{founder.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
