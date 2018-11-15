import React, { Component } from 'react';
import GlobalStyle from './global-styles';
import moment from 'moment';

import { weekDayToString, monthToString } from './helpers';
import Main from './Main';

class App extends Component {
  state = {
    day: '',
    month: '',
    dayOfMonth: '',
    year: '',
    hours: '00',
    minutes: '00',
    seconds: '00',
    meridiem: '',
  };

  init = () => {
    setInterval(() => {
      if (this.state.seconds === '59') {
        if (this.state.minutes === '59') {
          if (this.state.hours === '12') {
            this.setState({ hours: '01', minutes: '00', seconds: '00' });
            return;
          } else {
            this.incrementHours();
            return;
          }
        }
        this.incrementMinutes();
        return;
      } else {
        this.incrementSeconds();
        return;
      }
    }, 1000);
  };

  incrementSeconds = () => this.setState(state => ({ seconds: this.parseDigit(state.seconds) }));

  incrementMinutes = () => this.setState(state => ({ minutes: this.parseDigit(state.minutes), seconds: '00' }));

  incrementHours = () => this.setState(state => ({ hours: this.parseDigit(state.hours), seconds: '00', minutes: '00' }));

  parseDigit = digit => String(Number(digit) + 1).padStart(2, '0');

  getcurrentTime = () => {
    const time = moment().format('hh:mm:ss A');
    const hours = time.slice(0, 2);
    const minutes = time.slice(3, 5);
    const seconds = time.slice(6, 8);
    const meridiem = time.slice(9, 11);
    this.setState({ hours, minutes, seconds, meridiem });
  };

  getCurrentDate = () => {
    const date = new Date();
    const day = weekDayToString[date.getDay()];
    const month = monthToString[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    this.setState({ day, month, dayOfMonth, year });
  };

  componentDidMount() {
    this.init();
    this.getCurrentDate();
    this.getcurrentTime();
  }

  render() {
    const { day, hours, minutes, seconds, meridiem, month, dayOfMonth, year } = this.state;
    return (
      <>
        <GlobalStyle />
        <Main day={day} hours={hours} minutes={minutes} seconds={seconds} meridiem={meridiem} month={month} dayOfMonth={dayOfMonth} year={year} />
      </>
    );
  }
}

export default App;
