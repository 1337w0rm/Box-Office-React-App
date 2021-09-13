import React, { useState } from 'react';

import MainPageLayout from '../components/MainPageLayout';
import { getApi } from '../misc/config.js';
const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState('shows');

  const onSearch = () => {
    getApi(`/search/${search}?q=${input}`).then(result => setResult(result));
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) onSearch();
  };

  const radioChange = ev => {
    setSearch(ev.target.value);
    // console.log(ev.target.value);
  };

  const renderResult = () => {
    if (result && result.length === 0) return <div>No Result Found</div>;

    if (result && result.length > 0)
      return result[0].show
        ? result.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : result.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <form>
        <input
          type="radio"
          value="shows"
          name="searchFor"
          onChange={radioChange}
        />
        <label htmlFor="shows">Shows</label>

        <input
          type="radio"
          value="people"
          name="searchFor"
          onChange={radioChange}
        />
        <label htmlFor="people">Actors</label>
      </form>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
