import Selector from "./Figma/Selector";
import Event from "./Figma/Event";
import Search from "./Figma/Search";
import Hug from "./Figma/Hug";
import Source from "./Figma/Source";

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
      <div class="grid grid-cols-4 gap-1">
        <div class="col-span-1 p-2 ">source</div>
        <div class="col-span-1 p-2 ">name</div>
        <div class="col-span-1 p-2 ">creation date</div>
        <div class="col-span-1 p-2 ">status</div>
      </div>

      <div class="grid grid-cols-6 gap-1">
        <div class="col-span-1 p-2 ">destination</div>
        <Source />
        <div class="col-span-1 p-2 ">gotham assylum</div>
        <div class="col-span-1 p-2 ">10th Aug 2023</div>
        <div class="col-span-1 p-2 ">
          <button class="bg-blue-500 text-white p-2 rounded">Pause</button>
        </div>
        <div class="col-span-1 p-2 ">rop</div>
      </div>
    </>
  );
};

export default Dashboard;
