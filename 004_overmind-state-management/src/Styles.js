import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  .inner {
    max-width: 1360px;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  margin: 0 0 2rem 0;
  padding: 1rem 0;
  background-color: #3f3f3f;
  color: white;
  text-align: center;
  font-size: 2rem;
`;

const Button = styled.button`
  position: relative;
  display: block;
  width: 6rem;
  height: 2rem;
  margin: 0 auto;
  color: #fff;
  background-color: #4392f1;
  border: none;
  div {
    position: absolute;
    top: calc(0.9rem - 7.5px);
    left: calc(3rem - 7.5px);
  }
`;

const Posts = styled.ul``;
const Post = styled.li`
  cursor: pointer;
`;
export { StyledApp, Header, Button, Posts, Post };
