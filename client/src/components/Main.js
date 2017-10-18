import React from 'react';
import Sidebar from './Sidebar';
import Details from './Details';

const Main = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col s12 m4">
          <Sidebar />
        </div>
        <div className="col s12 m8">
          <Details />
        </div>
      </div>
    </main>
  );
};

export default Main;
