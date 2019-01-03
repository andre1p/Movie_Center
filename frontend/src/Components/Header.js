import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
    render() {
      return (
        <div className="header">
          <span className="logo">MovieCenter</span>
          <form action="">
          <input type="search" name="search"/>
          <input type="submit"/>
          </form>
          
        </div>
      )
    }
  }