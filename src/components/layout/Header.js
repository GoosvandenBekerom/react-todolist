import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header style={{marginBottom: '15px'}}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">

        <Link className="navbar-brand" to="/">
          React todo list
        </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

        </div>

      </nav>
    </header>
)

export default Header;