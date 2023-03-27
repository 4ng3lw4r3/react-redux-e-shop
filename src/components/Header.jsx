import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className="site-title">Angel Dust</Link>
    </div>
  )
}

export default Header