import React, { useState } from "react";
import Countries from "../../components/countries/Countries";
import Filter from "../../components/filter/SearchFilter";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Filter setQuery={setQuery} />
      <Countries query={query} />
    </div>
  );
};

export default Home;
