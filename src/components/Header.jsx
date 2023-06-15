import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="site-title">
        Hello Things
      </Link>
    </div>
  );
};

export default Header;
