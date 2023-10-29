import React from 'react';

const City = ({ city }) => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold">{city.name}</h1>
        <h1 className="text-2xl">{city.main.temp}°C</h1>
        <h1 className="text-xl">{city.weather[0].description}</h1>
      </div>
    </div>
  );
};

export default City;
