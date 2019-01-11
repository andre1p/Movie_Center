import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="logo">MovieCenter</span>
        <form action="/mlist">
          <input type="text" name="text" />
          <input type="submit" />
        </form>

      </div>
    )
  }
}