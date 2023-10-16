import Selector from "./Figma/Selector";
import Event from "./Figma/Event";
import Search from "./Figma/Search";
import Hug from "./Figma/Hug";
import Eye from "./Figma/Eye";
import Archive from "./Figma/Archive";
import Del from "./Figma/Del";
import Grid from "./Grid";
import Footer from "./Footer";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="p-6">
        <nav className="flex justify-between p-4 text-blackColor">
          <div className="flex items-center">
            <h1 className=" text-greenColor font-semibold text-[20px]   w-[90.22px] h-[25.73px] mb-6">
              Sigflow
            </h1>
          </div>
          <div className="flex items-center">
            <button className="w-[38px] h-[38px] p-2 rounded bg-green-500 text-white mr-4 font-inter text-24 font-semibold flex items-center justify-center">
              S
            </button>

            <div className="relative right-2">
              <p className="text-[14px] leading-[20px] font-semibold">
                Sigflow
              </p>
              <p className="text-[14px] leading-[20px]">Ego</p>
            </div>
          </div>
        </nav>
        <div className="flex justify-between">
          <div className="flex items-center">
            {" "}
            <button className="flex items-center">
              Sigflow <Selector className="relative bottom-2" />
            </button>
            <p>Transformation</p>
          </div>
          <div>
            <button>Create a new transformation</button>
            <button>Filter</button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Event />
            <p>Event</p>
          </div>
          <div className="flex items-center">
            <button>Search Transformation</button>
            <Search />
          </div>
        </div>
        <div className="flex items-center">
          <Hug />
          <p>Pipeline</p>
        </div>
        <Grid />

        <div className="flex flex-row">
          <div>
            <Eye />
            <Eye />
            <Del />
          </div>
          <div>
            <p>View Transformation</p>
            <p>Archive Transformation</p>
            <p>Delete Transformation</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
