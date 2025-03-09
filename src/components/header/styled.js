import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 300px;
  background: #333;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  transition: 0.5s;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 200px;
    height: 40vh;
    background: #222;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: #f4a261;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
