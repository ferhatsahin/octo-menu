import styled, { css } from 'styled-components';

export const MenuItemWrapper = styled.div`
    padding: 8px 12px;
    ${({ active }) => active && css`
        background-color: red;
    `}
`;