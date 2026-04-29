import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    // Added 'sticky' and 'backdrop-blur' for a premium modern feel
    <div className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/80 backdrop-blur-md">
      <div className="navbar max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-base-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-xl w-52 border border-base-200"
            >
              <Navlink />
            </ul>
          </div>

          {/* Logo container with better scaling */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={50}
              className="w-auto h-8 md:h-10 object-contain"
              priority
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium">
            <Navlink />
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {/* Improved button styling */}
          <Link
            href="/login"
            className="btn btn-primary btn-sm md:btn-md shadow-md hover:shadow-lg transition-all "
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
