// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./countries.scss";

// function CountryList() {
//   const [countries, setCountries] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getAllCountries = async () => {
//     try {
//       const response = await axios.get("https://restcountries.com/v3.1/all");

//       if (response.status !== 200) {
//         throw new Error("Something is wrong");
//       }

//       const data = response.data;

//       console.log(data);

//       setCountries(data);
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     const interval = getAllCountries();

//     return () => {
//       clearInterval(interval);
//     };
//   });

//   if (isLoading) {
//     return (
//       <div className="🤚">
//         <div className="👉"></div>
//         <div className="👉"></div>
//         <div className="👉"></div>
//         <div className="👉"></div>
//         <div className="🌴"></div>
//         <div className="👍"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <div></div>
//       <div>
//         {isLoading && !error && <h4>Loading..................</h4>}
//         {error && !isLoading && <h4>{error}</h4>}

//         {countries.map((country) => {
//           return (
//             <div style={{border: "1px solid red", width: "50%", margin: "1rem auto"}}>
//               <div>
//                 <img src={country.flags.png} />
//               </div>

//               <div>
//                 <h1>{country.name.common}</h1>
//                 <h6>Population: {country.population}</h6>
//                 <h6>Region: {country.region}</h6>
//                 <h6>Capital: {country.capital}</h6>
//                 <div>
//                   <h3>Languages:</h3>
//                   {country.languages &&
//                     Object.keys(country.languages).map((key) => {
//                       return (
//                         <ul key={key} style={{ display: "flex", gap: "2rem" }}>
//                           <li>{key}:</li>
//                           <span>{country.languages[key]}</span>
//                         </ul>
//                       );
//                     })}
//                 </div>
//                 <div>
//                   <h3>Native Name:</h3> <br />
//                   {country.name.nativeName &&
//                     Object.keys(country.name.nativeName).map((key) => {
//                       return (
//                         <ul key={key}>
//                           <li>
//                             <h4>Language:</h4> <h4>{key}</h4>
//                           </li>{" "}
//                           <br />
//                           <li>
//                             Official: {country.name.nativeName[key].official}
//                           </li>
//                           <li>Common: {country.name.nativeName[key].common}</li>
//                           <br />
//                         </ul>
//                       );
//                     })}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CountryList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./countries.scss";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    const fetchdata = async () => {
      const countriesdata = await axios.get(
        "https://restcountries.com/v3.1/all"
      );
      if (!isCancelled) {
        // alert("data is being fetched");
        setCountries(countriesdata.data);
      }
    };
    fetchdata();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <div className="countries">
        {countries.map((country) => {
          return (
            <div className="countrycard">
              <div className="flagcontainer">
                <img src={country.flags.svg} alt={country.flags.alt} />
              </div>

              <div className="info">
                <div className="name">
                  <h1>{country.name.common}</h1>
                </div>

                <div className="population">
                  <span>Population: {country.population}</span>
                </div>

                <div className="continent">
                  <span>Continent: {country.region}</span>
                </div>

                <div className="capital">
                  <span>Capital: {country.capital}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Countries;
