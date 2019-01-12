import React, { Component } from 'react'
import './Header.css';
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="logo">
        <Link to="/" className="logo">MovieCenter</Link>
        </span>
        <form action="/mlist">
          <input type="text" name="text" placeholder="Search your film"/>
          <input type="submit" />
        </form>

      </div>
    )
  }
}