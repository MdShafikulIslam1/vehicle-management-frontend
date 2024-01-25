import Link from "next/link";
import Image from 'next/image';
const Navbar = () => {
  const navItems = [
    {
      id: 1,
      itemName: "Business",
    },
    {
      id: 2,
      itemName: "Shifting",
    },
    {
      id: 3,
      itemName: "Vehicle Owner",
    },
  ];

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navItems?.map((navItem) => (
              <li key={navItem?.id}>
                <a className="">{navItem?.itemName}</a>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/">
        <Image
                    src="/images/logo.png"
                    alt='avater'
                    className="w-20 h-20
                    object-cover"
                    width={0}
                    height={0}
                    unoptimized
                />
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems?.map((navItem) => (
            <li key={navItem?.id}>
              <a>{navItem?.itemName}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-6">
      
      <Link href="login">Login</Link>
      <Link href="signup">Sign Up</Link>


      </div>
    </div>
  );
};
export default Navbar;
