// components/Header.js
const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-white shadow">
      <div>
        <h1 className="text-2xl font-bold">15.02.2021 Monday</h1>
        <span className="text-blue-500">Beta version</span>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 text-white bg-gray-400 rounded-md">
          Connect bank
        </button>
        <button className="px-4 py-2 text-white bg-gray-400 rounded-md">
          Universal Account
        </button>
        <button className="px-4 py-2 text-white bg-gray-400 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
