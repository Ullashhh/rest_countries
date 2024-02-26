import { useEffect, useState } from "react";
import Country from "../Country/Country";
import Skeleton from "../Skeleton/Skeleton";
import ByName from "../ByName/ByName";
import ByCapital from "../ByCapital/ByCapital";
import ByRegion from "../ByRegion/ByRegion";
import ByLetter from "../ByLetter/ByLetter";
import Drawer from "../Drawer/Drawer";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [capital, setCapital] = useState("");
  // Fetch data from API
  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSearchHandle = (e) => {
    const countryName = e.target.value;
    setSearchCountry(countryName);
  };

  const onRegionHandle = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
  };

  const onLetterHandle = (e) => {
    const letter = e.target.value;
    setSelectedLetter(letter);
  };

  const onCapitalHandle = (e) => {
    const capitalValue = e.target.value;
    setCapital(capitalValue);
  };

  return (
    <main className="md:px-10 mt-10 flex relative">
      <section className="md:w-1/6 sm:w-0 sticky top-[4.5rem] h-[30rem]">
        <div className="md:hidden sm:block">
          <Drawer
            onCapitalHandle={onCapitalHandle}
            onLetterHandle={onLetterHandle}
            onRegionHandle={onRegionHandle}
            onSearchHandle={onSearchHandle}
          ></Drawer>
        </div>
        <div className="hidden md:block">
          <ByName onSearchHandle={onSearchHandle}></ByName>
          <ByRegion onRegionHandle={onRegionHandle}></ByRegion>
          <ByLetter onLetterHandle={onLetterHandle}></ByLetter>
          <ByCapital onCapitalHandle={onCapitalHandle}></ByCapital>
        </div>
      </section>
      <section className="grid md:grid-cols-4 sm:grid-cols-1 md:w-5/6 gap-6 mx-3">
        {data.length > 0 ? (
          data
            .filter((country) => {
              return (
                capital.toLowerCase() === "" ||
                country?.capital
                  ?.toString()
                  .toLowerCase()
                  .startsWith(capital.toLowerCase())
              );
            })
            .filter((country, idx, arr) => {
              if (selectedLetter.toLowerCase() === "All".toLowerCase()) {
                return arr;
              } else if (
                selectedLetter.toLowerCase() !== "All".toLowerCase() &&
                country.name.common.startsWith(selectedLetter)
              ) {
                return country;
              }
            })
            .filter((country, idx, arr) => {
              if (region.toLowerCase() === "All".toLowerCase()) {
                return arr;
              } else if (
                country.region.toLowerCase() !== "All".toLowerCase() &&
                country.region.toLowerCase() === region.toLowerCase()
              ) {
                return country;
              }
            })
            .filter((country) => {
              return (
                searchCountry.toLowerCase() === "" ||
                country.name.common
                  .toLowerCase()
                  .startsWith(searchCountry.toLowerCase())
              );
            })
            .map((country) => (
              <Country key={country.cca3} country={country}></Country>
            ))
        ) : (
          <div className="grid md:grid-cols-4 sm:grid-cols-1 md:w-[70rem] sm:w-full gap-10">
            {" "}
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
