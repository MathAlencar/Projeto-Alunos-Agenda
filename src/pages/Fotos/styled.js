import styled from 'styled-components';

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: center;
    border: 5px dashed red;
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
  }

  input {
    display: none;
  }

  img {
    width: 168px;
    height: 168px;
    border-radius: 50%;
  }
`;
