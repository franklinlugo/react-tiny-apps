import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  margin: 1rem 0 0 0;
  padding: 0;
  line-height: 1;
`;

const Date = ({ month, dayOfMonth, year }) => <Container>{`${month} ${dayOfMonth}, ${year}`}</Container>;

export default Date;
