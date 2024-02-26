import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";


const Details = () => {
  const country = useLoaderData();
  const navigate = useNavigate()

  const previousNavigate = () => {
    navigate(-1)
  }

  const {
    altSpellings,
    area,
    capital,
    cca2,
    cca3,
    ccn3,
    coatOfArms,
    continents,
    currencies,
    flags,
    independent,
    languages,
    maps,
    name,
    population,
    region,
    startOfWeek,
    subregion,
    timezones
  } = country[0];

  const setCurr = Object.keys(currencies).map((e) => currencies[e]);
  const [currName] = setCurr;

  const setLang = Object.keys(languages).map((e) => languages[e]);

  return (
    <div className="sm:px-1 md:px-10 mt-5">
      <div className="sm:block md:flex items-center justify-center mb-10 border py-5 md:mx-80 rounded-lg">
        <img className="ml-12 mb-4" src={flags?.png} alt="" />
        <img className="h-44 ml-28" src={coatOfArms.png} alt="" />
      </div>
      <hr />
      <div className="md:mx-auto sm:mx-2 md:w-2/6 mt-10 text-gray-600 leading-6 border rounded-lg p-5">
        <h2>
          <b>Name: </b>
          {name?.common}
        </h2>
        <h2>
          <b>Official Name: </b>
          {name?.official}
        </h2>
        <h2>
          <b>Optional Name: </b>
          {altSpellings?.join(", ")}
        </h2>
        <h2>
          <b>Capital: </b>
          {capital}
        </h2>
        <h2>
          <b>Continents: </b>
          {continents}
        </h2>
        <h2>
          <b>Region: </b>
          {region}
        </h2>
        <h2>
          <b>Subregion: </b>
          {subregion}
        </h2>
        <h2>
          <b>{setLang.length > 1 ? "Languages:" : "Language:"} </b>
          {setLang.join(", ")}{" "}
        </h2>
        <h2>
          <b>Google Map: </b>
          <a target="_blank" href={maps.googleMaps}>
            <span className="text-blue-500">Click here</span>
          </a>
        </h2>
        <h2>
          <b>Open Street Map: </b>
          <a target="_blank" href={maps.openStreetMaps}>
            <span className="text-blue-500">Click here</span>
          </a>
        </h2>
        <h2>
          <b>Start of Week: </b>
          {startOfWeek}
        </h2>
        <h2>
          <b>Time Zone: </b>
          {timezones.join(", ")}
        </h2>
        <h2>
          <b>Currencies: </b>
          {currName.name}({currName.symbol})
        </h2>
        <h2>
          <b>Population: </b>
          {population} people live in (approx)
        </h2>
        <h2>
          <b>Area: </b>
          {area}
        </h2>
        <h2>
          <b>Independency: </b>
          {independent ? "Yes" : "No"}
        </h2>
        <h2>
          <b>CCA2: </b>
          {cca2}
        </h2>
        <h2>
          <b>CCA3: </b>
          {cca3}
        </h2>
        <h2>
          <b>CCN3: </b>
          {ccn3}
        </h2>
      </div>
      <button
        onClick={previousNavigate}
        className="btn btn-outline flex items-center justify-center mt-5 w-1/3 mx-auto mb-10"
      >
        <FaArrowLeftLong /> Go Back
      </button>
      <div className="mb-10">
        <hr />
      </div>
    </div>
  );
};

export default Details;
