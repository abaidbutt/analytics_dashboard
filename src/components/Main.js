import Chart from "./Chart";

// components/MainContent.js
const MainContent = () => {
  return (
    <div className="flex flex-col gap-6 p-6 text-start">
      <div className="flex flex-col">
        <div className="flex  justify-between">
          <div className="flex">
            <h3 className="text-4xl font-bold">15.02.2021 Monday</h3>{" "}
            <sup className="text-2xl font-semibold text-blue-500">Beta version</sup>
          </div>
          <div className="flex gap-2">
            <button
              className="px-5 py-3 text-lg font-semibold text-white bg-gray-400 rounded-md cursor-not-allowed"
              disabled
            >
              Connect bank
            </button>
            <button
              className="px-5 py-3 text-lg font-semibold text-white bg-gray-400 rounded-md cursor-not-allowed"
              disabled
            >
              Universal account
            </button>
            <button
              className="px-5 py-3 text-lg font-semibold  bg-white border rounded-md cursor-not-allowed"
              disabled
            >
              Logout
            </button>
          </div>
        </div>
        <p>
          Trial period remaining: <span className="text-red-500">21 days</span>
        </p>
        <div className="flex gap-10">
          <p className="text-sm">
            <span className="text-red-500">Recommendation:</span> Start from
            Creating financial model
          </p>
          <p className="text-sm">
            <span className="text-red-500">Recommendation:</span>
            Connect your bank accounts
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="px-5 py-3 text-lg font-semibold text-white bg-gray-400 rounded-md cursor-not-allowed"
            disabled
          >
            Connect bank
          </button>
          <button
            className="px-5 py-3 text-lg font-semibold text-white bg-gray-400 rounded-md cursor-not-allowed"
            disabled
          >
            Universal account
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex gap-2">
          <button className="px-5 py-3 text-lg font-semibold text-primary border border-primary rounded-md rounded-br-lg shadow hover:bg-primary hover:text-white focus:outline-none focus:ring-primary">
            Financial Business forecast
          </button>
          <button className="px-5 py-3 text-lg font-semibold text-primary border border-primary rounded-md rounded-br-lg shadow hover:bg-primary hover:text-white focus:outline-none focus:ring-primary">
            See the future of your business finances
          </button>
        </div>
        <div className="p-4 bg-white shadow rounded-md flex justify-around gap-5">
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
        <div className="flex-1 p-6 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold mb-4">
            Last 12 months - month by month profits or losses
          </h2>

          <div className=" bg-gray-200 rounded">
            <Chart />
          </div>
        </div>
        <div className="flex-1 p-6 bg-white shadow rounded-md">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold mb-4">Regular monthly payments</h2>
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
  );
};

export default MainContent;
