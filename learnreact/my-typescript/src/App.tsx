import React from 'react';
import { useState } from 'react';
import './App.css';

type Search = {
  search: string;
};
function App(): JSX.Element {
  const [search, setSearch] = useState<string>('');
  const [dataGifs, setDataGifs] = useState<Array<Giphy>>('');
  const handleButtonSearch = ():Promise<>
  return (
    <div className="App">
      <h2>This is Giphy</h2>
      <input id="search" name="search" value={search} onChange={(event) => setSearch(event.targe.value)} type="text"/>
      <button onClick={handleButtonSearch}></button>
    </div>
  );
}

export default App;
