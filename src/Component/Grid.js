import Source from "./Figma/Source";
import Dot from "./Figma/Dot";

const Grid = () => {
  return (
    <>
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

      {/* <div className="grid grid-cols-5 gap-1 ">
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
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        <div className="col-span-1 p-2">
          <div className="flex items-center">
            <div className="mr-2">
              <Source className="ml-2" />
            </div>
            destination
          </div>
        </div>
        <div className="col-span-1 p-2 border-b border-gray-300">
          gotham assylum
        </div>

        <div className="col-span-1 p-2 border-b border-gray-300">
          <button className="bg-blue-500 text-white p-2 rounded border-b border-gray-300">
            Pause
          </button>
        </div>
        <div className="col-span-1 p-2 mt-2 lg:mt-0 border-b border-gray-300 lg:mr-40">
          <Dot className="ml-24" />
        </div>
      </div>
    </>
  );
};
export default Grid;
