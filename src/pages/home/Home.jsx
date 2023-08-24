import React, { useState } from "react";
import Countries from "../../components/countries/Countries";
import Filter from "../../components/filter/SearchFilter";
import './home.scss'

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="home">
      <Filter setQuery={setQuery} />
      <Countries query={query} />
    </div>
  );
};

export default Home;
