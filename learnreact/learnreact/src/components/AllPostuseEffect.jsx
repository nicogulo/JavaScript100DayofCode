import React, { useEffect, useState } from 'react';
// import Post from './Post';
import axios from 'axios';

export default function AllPostuseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://foodmenu-api.herokuapp.com/api/menu')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>This is useEffect Component</h2>
      {data.map((datas) => {
        return (
          <div key={datas.id}>
            <h2>{datas.nama}</h2>
            <p>Rp {datas.harga}</p>
            <img src={datas.foto} alt={datas.nama} />
          </div>
        );
      })}
    </div>
  );
}
