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
            <button className="w-[38px] h-[38px] text-[24px] p-2 rounded bg-greenColor text-white mr-4 font-inter text-24 font-semibold flex items-center justify-center">
              S
            </button>

            <div className="relative right-2">
              <p className="text-[14px] leading-[20px] font-semibold">
                Sigflow
              </p>
              <p className="text-[14px] leading-[20px]">Adeoluwa Siyanbade</p>
            </div>
          </div>
        </nav>
        <div className="flex justify-between mt-6">
          <div className="flex items-center">
            {" "}
            <button className="flex items-center bg-thinGray p-2 rounded font-semibold text-[14px]">
              Sigflow{" "}
              <div className="ml-12">
                <Selector className="relative bottom-2 right-10" />
              </div>
            </button>
            <p className="ml-[154px] font-medium text-[20px]">Transformation</p>
          </div>
          <div className="flex ">
            <div className="mr-6">
              <button className="bg-greenColor p-1 text-white rounded text-[14px]">
                Create a new transformation
              </button>
            </div>
            <button className="bg-greenColor p-1 w-20 text-white rounded text-[14px]">
              Filter
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-4 ml-2">
          <div className="flex items-center">
            <Event />
            <p className="ml-2 text-[14px]">Event</p>
          </div>
          <div className="flex items-center border border-greenColor p-1 rounded">
            <button className="text-[12px]">Search Transformation</button>
            <div className="ml-10">
              <Search />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4 ml-2">
          <div className="">
            {" "}
            <Hug />
          </div>
          <p className="ml-2 text-[14px]">Pipeline</p>
        </div>
        <Grid />

        <div className="relative shadow-xl border w-[160px]  p-2  rounded ml-[900px] ">
          <div className="flex flex-row items-center text-[11px] leading-loose">
            <div className="mr-2 text-[11px]">
              <Eye />
            </div>
            <p className="text-[11px]">View Transformation</p>
          </div>
          <div className="flex flex-row items-center text-[11px]  leading-loose">
            <div className="mr-2 text-[11px]">
              <Eye />
            </div>
            <p className="text-[11px]">Archive Transformation</p>
          </div>
          <div className="flex flex-row items-center leading-loose">
            <div className="mr-2 text-[11px]">
              <Del />
            </div>
            <p className="text-[11px]">Delete Transformation</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
