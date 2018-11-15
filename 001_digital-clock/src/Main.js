// @flow
import React from 'react';
//$FlowFixMe
import styled from 'styled-components';
import Clock from './Clock';
import Day from './Day';
import Date from './Date';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 6rem;
`;

type Props = {
  day: string,
  hours: string,
  minutes: string,
  seconds: string,
  meridiem: string,
  month: string,
  dayOfMonth: string,
  year: string,
};

const Main = (props: Props) => (
  <Container>
    <Day day={props.day} />
    <Clock hours={props.hours} minutes={props.minutes} seconds={props.seconds} meridiem={props.meridiem} />
    <Date month={props.month} dayOfMonth={props.dayOfMonth} year={props.year} />
  </Container>
);

export default Main;
