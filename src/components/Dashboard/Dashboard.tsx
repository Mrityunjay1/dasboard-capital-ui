import LeftContent from "./LeftContent";
import Navbar from "./Navbar";
import RightContent from "./RightContent";

function Dashboard() {
  return (
    <div className="px-4 pt-8">
      <Navbar />
      <div className="flex mt-8 gap-3">
        <div className="w-[320px]">
          <LeftContent />
        </div>
        <div className="flex-1">
          <RightContent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
