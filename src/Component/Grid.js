import Source from "./Figma/Source";
import Transformation from "./Figma/Transformation";
import Account from "./Figma/Account";
import Setting from "./Figma/Setting";
import Dot from "./Figma/Dot";

const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-5 text-[14px] mt-4 ">
        <div className="col-span-1 p-2">
          <div className="flex items-center">
            <div className="mr-2  ">
              <Source class="" />
            </div>
            <div className="text-[14px] "> Source</div>
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          Name
        </div>

        <div className="col-span-1 p-2  border-b border-gray-300">
          <p className="  p-2  text-[12px]">Creation Date</p>
        </div>
        <div className="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40 text-[12px]">
          Status
        </div>
        <div className="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40 text-[12px]"></div>
      </div>

      <div className="grid grid-cols-5 gap-1 ">
        <div className="col-span-1 p-2">
          <div className="flex items-center">
            <div className="mr-2">
              <Source class="ml-2" />
            </div>
            <p className="text[14px]"> Destination</p>
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          Gotham Assylum
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          10th Aug 2023
        </div>
        <div className="col-span-1 p-2  border-b border-gray-300 ">
          <button className="bg-green-50 w-12 h-7  text-greenColor p-2 rounded text-[10px] ">
            Pause
          </button>
        </div>
        <div className="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40">
          <Dot className="ml-24" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 ">
        <div className="col-span-1 p-2">
          <div className="flex items-center bg-green-50 w-40 p-1 rounded text-[14px] border-b">
            <div className="mr-1 ">
              <Transformation class="" />
            </div>
            <div className="text[14px] p-2 text-greenColor">
              {" "}
              Transformation
            </div>
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          Gotham Assylum
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          10th Aug 2023
        </div>
        <div className="col-span-1 p-2  border-b border-gray-300 ">
          <button className="bg-lightGray w-12 h-7  text-white p-2 rounded text-[10px] ">
            Archive
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
              <Account class="ml-2" />
            </div>
            <p className="text[14px]"> Account</p>
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          Gotham Assylum
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          10th Aug 2023
        </div>
        <div className="col-span-1 p-2  border-b border-gray-300 ">
          <button className="bg-green-50 w-12 h-7  text-greenColor p-2 rounded text-[10px] ">
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
              <Setting class="ml-2" />
            </div>
            <p className="text[14px]"> Setting</p>
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          Gotham Assylum
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300 text-[12px]">
          10th Aug 2023
        </div>
        <div className="col-span-1 p-2  border-b border-gray-300 ">
          <button className="bg-thinGray w-12 h-7  text-white p-2 rounded text-[10px] ">
            Archive
          </button>
        </div>
        <div className="col-span-1 p-2 mt-2 border-b border-gray-300 mr-40">
          <Dot className="ml-24" />
        </div>
      </div>
    </>
  );
};
export default Grid;
