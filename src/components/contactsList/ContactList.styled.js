import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 600px;
  padding: 20px 32px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #dce6e5;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 400px;
  background-color: white;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #d4f2f1;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  padding: 8px;
  font-size: 17px;
  font-weight: 500;
`;

export const ItemBtn = styled.button`
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: #7cbb97;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-shadow: 1px 1px 2px #0a0000, 0 0 1em #0e14ad, 0 0 0.2em #21041e;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #14512e;
  }
`;
