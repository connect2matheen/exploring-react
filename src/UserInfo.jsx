import { useParams, Link } from "react-router-dom";

const UserInfo = (props) => {
  const { usersListData } = props
  const { id } = useParams();

  const getUserInfo = () => usersListData.filter((user) => user.id === parseInt(id, 10));

  const [userInfo] = getUserInfo();
  return (

    <div className="p-5 bg-light rounded-3">
      <header className="pb-3 mb-4 border-bottom">
        <Link to="/" className="d-inline-flex btn btn-secondary btn-sm align-items-center text-decoration-none">Back to users list </Link>
      </header>
      <div className="container-fluid py-5">
        <h2 className="display-5 fw-bold">{userInfo.name}</h2>
        <h3>{userInfo.region}, {userInfo.country}, {userInfo.phone}, {userInfo.email}</h3>
        <p className="col-md-8 fs-4">{userInfo.description}</p>
      </div>
    </div>
  )
}

export default UserInfo