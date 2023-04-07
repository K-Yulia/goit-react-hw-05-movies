import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 12px;
`;

export const CastItem = styled.li`
  flex-basis: 14%;
  color: white;
  background-color: rgb(243 129 7);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const CastImg = styled.img`
  height: 320px;
  width: 215px;
  object-fit: cover;
`;

export const CastTitle = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  :not(:last-child) {
    padding-bottom: 10px;
  }
`;
