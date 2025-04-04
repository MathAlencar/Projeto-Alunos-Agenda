import styled from 'styled-components';
import { headerColor } from '../../config/color';
import * as color from '../../config/color';

export const Profile = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  background-color: white;
  position: relative;

  img {
    height: 200px;
    width: 200px;
    border-radius: 100%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 180px;
    left: 80px;
    color: white;
    height: 40px;
    width: 40px;
    background-color: ${color.primaryColor};
    border-radius: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: ${headerColor};
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 420px;
  margin: 3rem auto;
  text-align: center;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }

  input {
    width: 100%;
    padding: 0.9rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: 0.3s ease-in-out;
    background: #f9f9f9;

    &:focus {
      border-color: #007bff;
      box-shadow: 0px 0px 8px rgba(0, 123, 255, 0.3);
      outline: none;
      background: #fff;
    }
  }

  button {
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.9rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    margin-top: 1rem;

    &:hover {
      background: linear-gradient(135deg, #0056b3, #004094);
      transform: scale(1.05);
    }
  }
`;
