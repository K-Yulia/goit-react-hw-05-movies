import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBackBtn = styled(NavLink)`
  display: inline-block;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  background-color: rgb(243 129 7);
  color: white;
  margin-bottom: 16px;
`;

export const MovieWrap = styled.div`
  display: flex;
  padding: 20px;
`;

export const MovieImage = styled.img`
  width: 360px;
`;

export const Info = styled.div`
  margin-left: 20px;
`;

export const MovieTitle = styled.h3`
  font-size: 40px;
`;

export const TitleInfo = styled.h4`
  font-size: 32px;
`;

export const Text = styled.p`
  margin: 20px 0;
  font-size: 20px;
  text-align: justify;
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 20px;
`;
