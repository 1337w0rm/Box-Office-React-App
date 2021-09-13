import React, { useState } from 'react';

import MainPageLayout from '../components/MainPageLayout';
import { getApi } from '../misc/config.js';
const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const onSearch = () => {
    setResult(getApi(`search/shows?q=${input}`));
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) onSearch();
  };

  const renderResult = () => {
    if (result && result.length === 0) return <div>No Result Found</div>;

    if (result && result.length > 0)
      return (
        <div>
          {result.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );

    return null;
  };

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
