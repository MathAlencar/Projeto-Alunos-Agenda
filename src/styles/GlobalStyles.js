import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
 }

 body {
  padding: 0 5rem;
  font-family: 'Poppins', sans-serif;
  background-color: ${primaryDarkColor};
  color: ${primaryDarkColor};
  transition: all 0.3s ease-in-out;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
 }

 html, body, #root {
  height: 100%;
 }

 button {
  cursor: pointer;
  background: linear-gradient(135deg, ${primaryColor}, ${primaryDarkColor});
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, ${primaryDarkColor}, ${primaryColor});
    transform: scale(1.05);
  }
 }

 a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
 }

 ul {
  list-style: none;
 }
`;

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 3rem auto;
  max-width: 1200px;

  @media (max-width: 1024px) {
    padding: 1.5rem;
    margin: 2rem auto;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }
`;
