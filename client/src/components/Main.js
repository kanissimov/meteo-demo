import React from 'react';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col s12 m4 l3">
          <Sidebar />
        </div>
        <div className="col s12 m8 l9">
          <h3>Dashboard</h3>
        </div>
      </div>
    </main>
  );
};

export default Main;
