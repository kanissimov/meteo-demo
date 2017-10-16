import React from 'react';

export default ({ data }) => {
  return (
    <div className="card blue-grey lighten-4">
      <div className="card-content white-text">
        <span className="card-title">{data.city.name}</span>
        <p />
      </div>
      <div className="card-action">
        <a to="/">Go home</a>
      </div>
    </div>
  );
};
