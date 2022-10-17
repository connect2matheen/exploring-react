import { Link } from "react-router-dom"

const UserItemCard = (props) => {
  const { user, selectedCountry, handleCountryChange } = props;

  return (
    <div key={user.id} className={(selectedCountry !== ''
      ? (user.country === selectedCountry
        ? "col" : "col d-none")
      : "col")}>
      <div className="card h-100">
        <div className="card-header text-bg-danger">{user.name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{user.country} <small className="text-muted">{user.region}</small></li>
          <li className="list-group-item">{user.phone}</li>
          <li className="list-group-item">{user.email}</li>
        </ul>
        <div className="d-flex card-footer justify-content-between">
          {selectedCountry !== '' ? '' : <button id={user.country} className="btn btn-secondary btn-sm" onClick={handleCountryChange}>Filter by {user.country}</button>}
          <Link to={`/user-details/${user.id}`} className="btn btn-danger btn-sm ms-auto">View User</Link>
        </div>
      </div>
    </div >
  )
}

export default UserItemCard;