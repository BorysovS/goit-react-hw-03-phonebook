import styled from 'styled-components';

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 600px;
  padding: 20px 32px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #dce6e5;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  font-weight: 400;
  text-shadow: -1px 0px 17px rgb(37 174 192 / 90%);
`;

export const FilterInput = styled.input`
  border-radius: 8px;
  padding: 4px;
  width: 250px;
`;
