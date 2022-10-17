import UsersCountryList from './UsersCountryList'
import UserItemCard from './UserItemCard'

const UsersList = (props) => {
  const { usersListData, handleCountryChange, selectedCountry } = props
  const selectedCountryUsersCount = usersListData.filter((user) =>
    selectedCountry !== '' ? user.country === selectedCountry : user).length

  return (
    <section className="container-fluid">
      <div className="row mt-3 mb-4 align-items-center justify-content-center">
        <div className="col d-flex justify-content-between pt-2 pb-2">
          <h2 className="fs-5 m-0">Users: {selectedCountry !== '' ? `${selectedCountry} has` : ''} {selectedCountryUsersCount} users</h2>

          {selectedCountry !== '' ?
            <button id='' className="btn btn-secondary btn-sm" onClick={handleCountryChange}>Clear</button> : ''}
        </div>
        <div className="col-md-3 pt-2 pb-2">
          <UsersCountryList usersListData={usersListData} handleCountryChange={handleCountryChange} selectedCountry={selectedCountry} />
        </div>
      </div>

      <div className="row bg-transparent row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4" >
        {
          usersListData.map((user) => {
            return (
              <UserItemCard key={user.id} user={user} selectedCountry={selectedCountry} handleCountryChange={handleCountryChange} />
            )
          })
        }
      </div>
    </section>
  )
}

export default UsersList;