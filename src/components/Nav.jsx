import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navbar bg-primary">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost text-xs lg:text-xl">Power Up</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {' '}
              <Link to="/national">Big Picture</Link>
            </li>{' '}
            <li>
              <Link to="/activities">What To Change</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
