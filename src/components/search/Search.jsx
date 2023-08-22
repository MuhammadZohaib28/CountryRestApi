import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(input);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Search Any Country Name"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
