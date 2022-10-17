import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='row shadow'>
      <nav className="navbar navbar-dark navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">S@mple</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'} to="/">All Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'} to="/users-by-country">Users by Country</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;