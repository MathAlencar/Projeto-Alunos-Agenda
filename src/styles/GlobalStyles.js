import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
 }

 body {
  padding-left: 10rem;
  padding-right: 10rem;
  font-family: sans-serif;
  background-color: ${primaryDarkColor};
  color: ${primaryDarkColor};

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
 }

 html, border-style, #root{
  height: 100%;
 }

 button {
  cursor: pointer;
  background-color: ${primaryColor};
  border: none;
  color: #000;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
 }

 a {
  text-decoration: none;
  color: white;
 }

 ul {
  list-style: none;
 }

 `;

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
  background-color: #fff;
`;
