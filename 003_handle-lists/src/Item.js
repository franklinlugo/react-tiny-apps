import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const STyledItem = styled.div`
  position: relative;
  width: 75%;
  margin: 0 auto 1rem;

  color: ${props => props.theme.jet};
  border: 1px solid ${props => props.theme.jet};
  box-shadow: ${props => props.theme.bs};

  h3 {
    margin: 0 0 0.5rem 0;
    padding: 0.5rem 0.5rem 0.2rem 0.5rem;
    border-bottom: 1px solid ${props => props.theme.orange};
  }
  p {
    margin: 0;
    padding: 0.5rem;
  }
  input {
    padding: 0.5rem;
    margin: 0 0 0.5rem 0.5rem;
  }
`;
const BtnDelete = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.skobeloff};
`;

const Item = ({ name, age, description, delItem, changed }) => (
  <STyledItem>
    <BtnDelete onClick={delItem}>
      <FaTimes />
    </BtnDelete>
    <h3>{name}</h3>
    <p>Edad: {age}</p>
    <p>Descripción: {description}</p>
    <input type="text" placeholder="Editar descripcion" value={description} onChange={changed} />
  </STyledItem>
);

export default Item;
