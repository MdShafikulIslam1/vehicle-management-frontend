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
        <img src="/images/logo.png" alt="logo.." className="w-20 h-20"/>
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
      
      <a className="btn">VT-Shop</a>
        {/* Login & logout will be conditional rendering */}
        <a className="btn">Log In</a> 
        {/* <a className="btn">Log Out</a> */}


      </div>
    </div>
  );
};
export default Navbar;
