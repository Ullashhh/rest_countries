import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";

const Country = ({ country }) => {
  // console.log(country)
  return (
    <div className="border p-5 rounded-lg">
      <img className="w-full h-36 rounded-lg" src={country.flags.png} alt="" />
      <h2 className="mt-3">
        <b>Name: </b>
        {country.name.common}
      </h2>
      <h2>
        <b>Capital: </b>
        {country.capital}
      </h2>
      <h2>
        <b>Population: </b>
        {country.population} people live in. (approx)
      </h2>
      <h2>
        <b>Region: </b>
        {country.region}
      </h2>
      <Link to={`/details/${country.name.common}`}>
        <button className="btn btn-outline mt-5 w-full">
          Details <IoEyeSharp />
        </button>
      </Link>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.node,
};
export default Country;
