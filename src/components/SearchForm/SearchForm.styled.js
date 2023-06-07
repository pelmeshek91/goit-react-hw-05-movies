import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Button = styled.button`
  margin: 10px auto 10px 5px;
  color: #ffffff;
  background-color: rgb(88, 195, 195);
  border-color: transparent;
  border-radius: 3px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    color: '#ff5722';
    background-color: '#f6f6f6';
  }
`;

export const Input = styled.input`
  color: '#2a2a2a';
  background-color: '#fff';
  &:focus {
    outline-color: '#ff5722';
  }
`;
