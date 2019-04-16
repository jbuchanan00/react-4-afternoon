import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom"
import router from "./router"
import { Link } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='nav'>
            <Link to="/">
              <div>WestSide University</div>
            </Link>
            <Link className='link-wrap'>
              <Link to="/" className='links'>Home</Link>
              <Link to="/about" className='links'>About</Link>
            </Link>
          </nav>
          {router}
        </div>
      </Router>
    )
  }
}