import React from "react";

const Carousal = () => {
  return (
    <div className="m-5 mt-10">
      <div className="flex text-xl justify-center">
        Global Comapnies Adapting Green Energy
      </div>
      <div className="flex flex-wrap justify-around gap-5  p-5">
        <div className="w-64 h-24 overflow-hidden rounded-lg shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png"
            alt="Google Logo"
            className="w-full h-full "
          />
          <p className="text-center text-gray-700 mt-2">Google</p>
        </div>

        <div className="w-64 h-24 overflow-hidden rounded-lg shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png"
            alt="IBM Logo"
            className="w-full h-full "
          />
          <p className="text-center text-gray-700 mt-2">IBM</p>
        </div>

        <div className="w-64 h-24 overflow-hidden rounded-lg shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
            className="w-full h-full"
          />
          <p className="text-center text-gray-700 mt-2">Apple</p>
        </div>

        <div className="w-64 h-24 overflow-hidden rounded-lg shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="Amazon Logo"
            className="w-full h-full "
          />
          <p className="text-center text-gray-700 mt-2">Amazon</p>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
