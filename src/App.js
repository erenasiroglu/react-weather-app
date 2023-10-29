import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import City from './city';

function App() {
  const key = "8551aad0492b5c93c3c2ef4b0d4ec834";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState;
  useEffect(() => {
    async function getAPI() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAPI();
  }, [search, setCity]);
  return (
    <div className="App">
      <input
  onChange={(e) => setSearch(e.target.value)}
  type="text"
  placeholder="Placeholder"
  className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-whiterounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
/>
      <City city={city}></City>
    </div>
  );
}

export default App;