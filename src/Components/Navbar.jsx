import { LuMenu } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="bg-white sticky top-0 z-10">
      <div className="navbar px-0 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <LuMenu className="text-xl mr-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-base text-gray-600 font-medium">Home</a>
              </li>

              <li>
                <a className="text-base text-gray-600 font-medium">Recipes</a>
              </li>

              <li>
                <a className="text-base text-gray-600 font-medium">About</a>
              </li>

              <li>
                <a className="text-base text-gray-600 font-medium">Search</a>
              </li>
            </ul>
          </div>
          <a className="sm:text-xl font-bold text-lg">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base text-gray-600 font-medium">Home</a>
            </li>

            <li>
              <a className="text-base text-gray-600 font-medium">Recipes</a>
            </li>

            <li>
              <a className="text-base text-gray-600 font-medium">About</a>
            </li>

            <li>
              <a className="text-base text-gray-600 font-medium">Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <label className="input rounded-full bg-gray-100 flex items-center gap-2">
            <FiSearch />
            <input
              type="text"
              className="grow w-14 md:w-40"
              placeholder="Search"
            />
          </label>
          <a className="btn btn-sm rounded-full w-12 h-12 text-lg">
            <FaRegUser />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
