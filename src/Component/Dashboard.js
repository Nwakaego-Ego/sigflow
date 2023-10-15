import Selector from "./Figma/Selector";
import Event from "./Figma/Event";
import Search from "./Figma/Search";
import Hug from "./Figma/Hug";
import Source from "./Figma/Source";
import Dot from "./Figma/Dot";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <nav className="flex justify-between p-4 text-blackColor">
        <div className="flex items-center">
          <h1 className="p-6 text-greenColor font-semibold text-[20px]   w-[90.22px] h-[25.73px] mb-6">
            Sigflow
          </h1>
        </div>
        <div className="flex items-center">
          <button className="w-[38px] h-[38px] p-2 rounded bg-green-500 text-white mr-4 font-inter text-24 font-semibold leading-40 tracking-0 flex items-center">
            S
          </button>

          <div className="relative right-2">
            <p className="text-[14px] leading-[20px] font-semibold">Sigflow</p>
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

      <div className="grid grid-cols-5 gap-1 ">
        <div className="col-span-1 p-2">
          <div classNmae="flex items-center">
            <div className="mr-2">
              <Source className="ml-2" />
            </div>
            destination
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          gotham assylum
        </div>

        <div className="col-span-1 p-2  border-b border-gray-300">
          <button className="bg-blue-500 text-white p-2 rounded border-b border-gray-300">
            Pause
          </button>
        </div>
        <div className="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40">
          <Dot className="ml-24" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 ">
        <div className="col-span-1 p-2">
          <div className="flex items-center">
            <div className="mr-2">
              <Source class="ml-2" />
            </div>
            destination
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          gotham assylum
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          10th Aug 2023
        </div>
        <div className="col-span-1 p-2  border-b border-gray-300">
          <button class="bg-blue-500 text-white p-2 rounded border-b border-gray-300">
            Pause
          </button>
        </div>
        <div classNmae="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40">
          <Dot className="ml-24" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 ">
        <div className="col-span-1 p-2">
          <div className="flex items-center">
            <div className="mr-2">
              <Source class="ml-2" />
            </div>
            destination
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          gotham assylum
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          10th Aug 2023
        </div>
        <div className="col-span-1 p-2  border-b border-gray-300">
          <button class="bg-blue-500 text-white p-2 rounded border-b border-gray-300">
            Pause
          </button>
        </div>
        <div classNmae="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40">
          <Dot className="ml-24" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 ">
        <div className="col-span-1 p-2">
          <div className="flex items-center">
            <div className="mr-2">
              <Source class="ml-2" />
            </div>
            destination
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          gotham assylum
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          10th Aug 2023
        </div>
        <div className="col-span-1 p-2  border-b border-gray-300">
          <button class="bg-blue-500 text-white p-2 rounded border-b border-gray-300">
            Pause
          </button>
        </div>
        <div classNmae="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40">
          <Dot className="ml-24" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 ">
        <div className="col-span-1 p-2">
          <div className="flex items-center">
            <div className="mr-2">
              <Source class="ml-2" />
            </div>
            destination
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          gotham assylum
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          10th Aug 2023
        </div>
        <div className="col-span-1 p-2  border-b border-gray-300">
          <button class="bg-blue-500 text-white p-2 rounded border-b border-gray-300">
            Pause
          </button>
        </div>
        <div classNmae="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40">
          <Dot className="ml-24" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
