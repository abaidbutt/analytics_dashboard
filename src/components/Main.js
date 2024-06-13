import Chart from "./Chart";
import { FaFastForward, FaChartLine, FaChartBar } from "react-icons/fa";

// components/MainContent.js
const MainContent = () => {
  return (
    <>
      <div className="flex flex-col gap-6 p-6 text-start md:block hidden">
        <div className="flex flex-col">
          <div className="flex  justify-between">
            <div className="flex">
              <h3 className="text-4xl font-bold">15.02.2021 Monday</h3>{" "}
              <sup className="text-2xl font-semibold text-blue-500">
                Beta version
              </sup>
            </div>
            <div className="flex gap-2">
              <button
                className="px-5 py-3 text-lg font-semibold text-white bg-gray-300 border-gray-400 border rounded-lg cursor-not-allowed"
                disabled
              >
                Connect bank
              </button>
              <button
                className="px-5 py-3 text-lg font-semibold text-white bg-gray-300 border-gray-400 border rounded-lg cursor-not-allowed"
                disabled
              >
                Universal account
              </button>
              <button
                className="px-5 py-3 text-lg font-semibold  bg-white border rounded-lg cursor-not-allowed"
                disabled
              >
                Logout
              </button>
            </div>
          </div>
          <p className="flex items-center gap-1">
            Trial period remaining:{" "}
            <span className="text-red-500">21 days</span>{" "}
            <img src="./info.png" className="w-4 h-4" />
          </p>
          <div className="flex gap-10 my-5">
            <p className="text-sm">
              <span className="text-red-500">Recommendation:</span> Start from
              Creating financial model
            </p>
            <p className="text-sm">
              <span className="text-red-500">Recommendation:</span>
              Connect your bank accounts
            </p>
          </div>
          <div className="flex gap-2 my-2">
            <button
              className="px-5 py-3 text-lg font-semibold text-white bg-gray-300 border-gray-400 border rounded-lg cursor-not-allowed"
              disabled
            >
              Connect bank
            </button>
            <button
              className="px-5 py-3 text-lg font-semibold text-white bg-gray-300 border-gray-400 border rounded-lg cursor-not-allowed"
              disabled
            >
              Universal account
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-4 my-8">
          <div className="flex gap-2">
            <button className="text-sm px-3 py-3 text-start font-semibold text-primary border border-primary rounded-lg rounded-br-lg shadow hover:border-blue-300 focus:outline-none focus:ring-primary">
              <FaChartLine size={30} />
              Financial Business forecast
            </button>
            <button className="text-sm px-3 py-3 text-start font-semibold text-primary border border-primary rounded-lg rounded-br-lg shadow hover:border-blue-300 focus:outline-none focus:ring-primary">
              <FaFastForward size={30} />
              See the future of your business finances
            </button>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg flex justify-around gap-5 w-1/2">
            <div className="text-center">
              <p>When you buy goods VAT incurred</p>
              <p className="text-blue-500 text-lg font-bold">100,000</p>
            </div>
            <div className="text-center">
              <p>When you sell goods VAT expended</p>
              <p className="text-blue-500 text-lg font-bold">50,000</p>
            </div>
            <div className="text-center">
              <p>Current Amount of VAT to be paid to government</p>
              <p className="text-blue-500 text-lg font-bold">50,000</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-1 p-6 bg-white">
            <h2 className="text-lg font-bold mb-4">
              Last 12 months - month by month profits or losses
            </h2>

            <div className="">
              <Chart />
            </div>
          </div>
          <div className="flex-1 p-6 bg-white shadow rounded-lg border border-gray-400">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold mb-4">
                Regular monthly payments
              </h2>
              <div className="text-start">$o</div>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <div className="text-start">
                  <span className="text-lg block">Amazon</span>
                  <span className="text-sm block">Next Payment</span>
                </div>
                <div className="text-end">
                  <span className="text-red-500">99.00</span>
                  <span className="text-sm block">15.052023</span>
                </div>
              </li>
              <li className="flex justify-between">
                <div className="text-start">
                  <span className="text-lg block">Amazon</span>
                  <span className="text-sm block">Next Payment</span>
                </div>
                <div className="text-end">
                  <span className="text-red-500">99.00</span>
                  <span className="text-sm block">15.052023</span>
                </div>
              </li>
              <li className="flex justify-between">
                <div className="text-start">
                  <span className="text-lg block">Amazon</span>
                  <span className="text-sm block">Next Payment</span>
                </div>
                <div className="text-end">
                  <span className="text-red-500">99.00</span>
                  <span className="text-sm block">15.052023</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 md:hidden block">
        <div className="text-start space-y-2">
          <p className="text-red-500 font-semibold text-sm">
            Recommendation:{" "}
            <span className="font-normal text-black">
              Start from Creating 4 year business model
            </span>
          </p>
          <p className="text-red-500 font-semibold text-sm">
            Recommendation:{" "}
            <span className="font-normal text-black">Connect your bank accounts</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="./info.png" alt="Flag" className="w-6 h-6" />{" "}
            {/* Placeholder for the flag image */}
            <span className="text-2xl font-bold">0.00</span>
            <span className="text-lg">British Pounds</span>
          </div>
          <button className="text-lg">▼</button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-2">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-700">
              Secure your data
            </button>
            <button className="px-4 py-2 text-primary border border-primary rounded-lg shadow hover:bg-primary hover:text-white">
              Connect bank
            </button>
            <button className="px-4 py-2 text-primary border border-primary rounded-lg shadow hover:bg-primary hover:text-white">
              Connect Wallet
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="px-2 text-md py-2 text-primary border border-primary rounded-lg shadow hover:bg-primary hover:text-white">
              Create 4 years business model
            </button>
            <button className="px-2 text-md py-2 text-primary border border-primary rounded-lg shadow hover:bg-primary hover:text-white">
              See the future of your business finances
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
