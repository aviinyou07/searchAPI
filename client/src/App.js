import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <SearchForm onSearchResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
