import React from 'react';

export default ({ city, onRemove, onSelect, selected }) => {
  const { id } = city;
  const classes = selected ? 'blue-grey' : 'blue-grey lighten-3';
  return (
    <div className={`card ${classes}`}>
      <div className="card-content white-text" onClick={() => onSelect(id)}>
        <div className="card-title">{`${city.name}`}</div>
        <div className="weather-icon">
          <img
            alt=""
            src={`http://openweathermap.org/img/w/${city.current.icon}.png`}
          />
        </div>
        <i className="close-button material-icons" onClick={() => onRemove(id)}>
          close
        </i>
        <div className="row">
          <div className="col s5 temperature">{`${city.current.temp}°C`}</div>
          <div className="col s7 summary">
            <div>{city.current.description}</div>
            <div>{`wind: ${city.current.wind.speed} m/s`}</div>
            <div>{`humidity: ${city.current.humidity}%`}</div>
            <div>{`pressure: ${city.current.pressure} hpa`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
