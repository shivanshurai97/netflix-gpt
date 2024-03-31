import { Link } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="w-full absolute my-52 text-white text-center h-screen py-auto">
        <h1 className="text-5xl my-8 font-extrabold">
          Unlimited movies, TV shows and more
        </h1>
        <h3 className="text-3xl my-8">Watch anywhere. Enjoy anytime.</h3>
        <Link to={"/login"}>
          <h3 className="text-2xl my-6 hover:text-red-600">
            Ready to watch? Sign In now
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
