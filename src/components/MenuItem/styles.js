import styled, { css } from 'styled-components';

export const MenuItemWrapper = styled.div`
  padding: 8px 16px;
  position: relative;
  svg { 
    margin-left: 12px;
    transition-duration: 0.2s;
    transition-property: transform;
  }
  ul{
      display: none;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: red;
      svg {
        transform: rotate(180deg);
      }
      ul {
          display: block;
      }
    `}

`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none; 
`;