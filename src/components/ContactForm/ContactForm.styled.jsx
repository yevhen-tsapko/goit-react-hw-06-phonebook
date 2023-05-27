import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  width: 60%;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
  border: 2px solid grey;
`;
export const Field = styled.label`
  // display: flex;
  // gap: 5px;
`;
export const Input = styled.input`
  display: block;
  margin-top: 3px;
  padding: 3px;
  &:hover,
  :focus {
    border: 2px solid rgba(50, 57, 65, 1);
    background: #beeaee;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const SubmitButton = styled.button`
  display: inline-block;
  width: 160px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
  :active {
    background: #5579f0;
  }
`;
