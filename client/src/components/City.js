import React from 'react';

export default ({ data, onRemove, onSelect, selected }) => {
  const { id } = data.city;
  const classes = selected ? 'blue-grey' : 'blue-grey lighten-4';
  return (
    <div className={`card ${classes}`}>
      <div className="card-content white-text" onClick={() => onSelect(id)}>
        <span className="card-title">{data.city.name}</span>
        <p />
      </div>
      <div className="card-action">
        <a
          className="btn-floating btn-flat blue-grey"
          onClick={() => onRemove(id)}
        >
          <i className="material-icons">remove</i>
        </a>
        <a
          className="btn-floating btn-flat blue-grey"
          onClick={() => onSelect(id)}
        >
          <i className="material-icons">visibility</i>
        </a>
      </div>
    </div>
  );
};
