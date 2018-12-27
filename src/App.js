import React, { Component, Fragment } from 'react';
import "./App.css"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Button />
        <Button danger/>
      </Fragment>
    );
  }
}

const Button = ({danger}) => {
  return (
    <button className={danger ? "button button__danger" : "button button__success"}>hello!</button>
  )  
}

export default App;
