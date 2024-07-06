import Dashboard from "./Dashboard";
export default function Header(props) {
  // const [toggleDashboard, setToggleDashboard] = useState(false);
  return (
    <div className="flex justify-between gap-2">
      <div>
        <div
          className={`${props.toggleDashboard ? "block" : "hidden md:block"} `}
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
