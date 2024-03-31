import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex sm:px-24 py-2 absolute z-10 bg-gradient-to-b from-black">
        <Link to={"/"}>
          <img
            className="w-2/6 lg:w-1/6"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </Link>
        {pathname === "/" && (
          <Link to={"/login"} className="my-auto">
            <button className="w-16 sm:w-20 p-1 sm:px-3 sm:py-2 my-auto mx-2 bg-red-600 text-sm text-white rounded-md">
              Sign In
            </button>
          </Link>
        )}
      </div>
      <div className="absolute">
        <img
          className="h-screen w-screen brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
    </>
  );
};

export default Header;
