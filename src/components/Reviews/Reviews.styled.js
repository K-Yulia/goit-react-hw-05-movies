import styled from 'styled-components';

export const ReviewItem = styled.li`
  padding: 20px;
  background-color: rgb(243 129 7);
  color: white;
  border-radius: 4px;
  & + & {
    margin-top: 20px;
  }
  p + p {
    margin-top: 8px;
  }
`;
