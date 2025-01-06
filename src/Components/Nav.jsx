import Button from "../UI/Button";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header className="w-full h-16 bg-secondaryBackground flex items-center fixed top-0 left-0 z-50">
      <nav className="w-full flex justify-between items-center px-10 md:px-20 shadow-lg">
        {/* title */}
        <h1 className="text-3xl text-black font-bold tracking-widest focus-in-contract-bck">
          Task Manager
        </h1>

        {/* links */}
        <div className="flex space-x-4">
          <Link to="/">
            <Button name="Home" />
          </Link>
          <Link to="/add-task">
            <Button name="Add Task" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
