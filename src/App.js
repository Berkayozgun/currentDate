import React, { Component}from 'react';
import './App.css';


  const CurrentDate = (props) => {  
    return (
      <div className="current-date">
          <h1>
          {props.date}
          </h1>
      </div>
    )
  }

class Calendar extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h2>Anlık saat ve tarih : </h2>
        <CurrentDate date={Date()}/>
      </div>
    )
  }
}
export default Calendar;