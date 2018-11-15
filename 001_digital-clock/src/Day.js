import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  margin: 0 0 1rem 0;
  padding: 0;
  line-height: 1;
`;

const Day = ({ day }) => <Container>{day}</Container>;

export default Day;
