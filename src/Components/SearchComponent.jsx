import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [sarees, setSarees] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://meshoo-mock-server-app.onrender.com/allsarees")
      .then((response) => response.json())
      .then((data) => setSarees(data));
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm === "") {
      setSearchResults([]);
    } else {
      const results = sarees.filter((saree) =>
        saree.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [debouncedSearchTerm, sarees]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <h2>{result.name}</h2>
              <p>{result.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
};

export default SearchComponent;
