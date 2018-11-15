import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  line-height: 1;
  overflow: hidden;
  min-height: 100px;
`;

const Number = styled(TransitionGroup)`
  position: relative;
  width: 8rem;
  span.hours-enter,
  span.minutes-enter,
  span.seconds-enter {
    position: absolute;
    transition: 1s;
    transform: translateY(100%);
  }
  span.hours-enter-active,
  span.minutes-enter-active,
  span.seconds-enter-active {
    transform: translateY(0);
  }
  span.hours-exit,
  span.minutes-exit,
  span.seconds-exit {
    position: absolute;
    transition: 1s;
    transform: translateY(0);
  }
  span.hours-exit-active,
  span.minutes-exit-active,
  span.seconds-exit-active {
    transform: translateY(-100%);
  }
`;

const Clock = ({ hours, minutes, seconds, meridiem }) => (
  <Container>
    <Number>
      <CSSTransition key={hours} classNames="hours" timeout={1000}>
        <span>{hours}:</span>
      </CSSTransition>
    </Number>
    <Number>
      <CSSTransition key={minutes} classNames="minutes" timeout={1000}>
        <span>{minutes}:</span>
      </CSSTransition>
    </Number>
    <Number>
      <CSSTransition key={seconds} classNames="seconds" timeout={{ enter: 1000, exit: 1000 }}>
        <span>{seconds}</span>
      </CSSTransition>
    </Number>
    <span>{meridiem}</span>
  </Container>
);
export default Clock;
