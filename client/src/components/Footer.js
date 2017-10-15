import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer class="page-footer teal lighten-4">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
          </div>
        </div>
      </div>
      <div class="footer-copyright teal lighten-3">
        <div class="container">
          © 2017 Copyright
          <Link to="/" class="grey-text text-lighten-4 right">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
};
