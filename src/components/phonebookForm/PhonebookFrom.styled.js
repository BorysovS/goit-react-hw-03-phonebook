import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikInput,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 600px;
  padding: 20px 32px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #dce6e5;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const ErrorMessage = styled(FormikError)`
  margin-left: 20px;
  color: red;
  text-shadow: 1px 2px 12px rgba(185, 6, 6, 1);
`;

export const FormLabel = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabelName = styled.span`
  font-size: 18px;
  font-weight: 400;
  text-shadow: -1px 0px 17px rgb(37 174 192 / 90%);
`;

export const FormBtn = styled.button`
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: #7cbb97;
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 1px 1px 2px #0a0000, 0 0 1em #0e14ad, 0 0 0.2em #21041e;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #14512e;
  }
`;

export const Field = styled(FormikInput)`
  border-radius: 8px;
  padding: 4px;
  width: 250px;
`;
