import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">
          {' '}
          <a className="btn btn-ghost text-xl">Power Up</a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/activities">Household Activities</Link>
          </li>
          <li>
            {' '}
            <Link to="/national">The Bigger Picture</Link>
          </li>{' '}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
