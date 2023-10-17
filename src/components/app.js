import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() { // parent component
    return (
      <div className='app'>
        <h1>Robert React Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
