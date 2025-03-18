import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/color';

export const AlunoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
    background: #f9f9f9;

    &:hover {
      background: #f1f1f1;
      transform: scale(1.02);
    }
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin: 0 10px;
  }

  div + div {
    border-top: 1px solid #ddd;
  }

  a {
    text-decoration: none;
    margin-left: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const FotoConteiner = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${primaryColor};
  }

  svg {
    color: ${primaryDarkColor};
  }
`;
