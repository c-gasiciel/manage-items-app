import React from 'react';
import styled from 'styled-components';


const Header = ({pageTitle}) =>
        <StyledHeader>
            <h1>{ pageTitle }</h1>
        </StyledHeader>  

export default Header;

const StyledHeader = styled.header` 
    text-align: center;
`;