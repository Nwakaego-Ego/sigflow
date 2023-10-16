import Documentation from "./Figma/Documentation";

const Footer = () => {
  return (
    <>
      <div className="flex items-center">
        <Documentation />
        <p className="ml-2 text-greenColor">Help</p>
      </div>
      <div className="flex items-center">
        <Documentation />
        <p className="ml-2 text-greenColor">Documentation</p>
      </div>
      <div className="ml-64 mt-12">
        <button className="bg-greenColor w-6 h-6 text-center text-white rounded m-1 text-[12px]">
          5
        </button>
        <button className=" bg-thinGray w-6 h-6 text-center text-blackColor rounded m-1 text-[12px]">
          10
        </button>
        <button className=" bg-thinGray w-6 h-6 text-center text-blackColor rounded m-1 text-[12px]">
          15
        </button>
      </div>
    </>
  );
};

export default Footer;
