import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Item = styled.li`
  margin-top: 8px;
  font-weight: 500;
`;

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  color: black;
  border-radius: 12px;
  :hover {
    background-color: rgb(243 129 7);
    font-weight: 700;
    color: white;
  }
`;
