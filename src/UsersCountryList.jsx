const UsersCountryList = (props) => {
  const { usersListData, handleCountryChange, selectedCountry } = props;
  let countries = [];

  function usersCountryGroup() {
    return usersListData.reduce((accumulator, currentUser) => {
      const countryName = currentUser.country
      if (!accumulator.includes(countryName)) {
        accumulator.push(countryName);
      }
      return accumulator
    }, []);
  }

  countries = usersCountryGroup();

  return (
    <select className="form-select form-select-sm col-md-4" aria-label="Select country" value={selectedCountry} onChange={handleCountryChange}>
      <option value=''>All</option>
      {
        countries.map((country) => {
          return (
            <option key={country} value={country}>{country}</option>
          )
        })
      }
    </select>
  )
}

export default UsersCountryList