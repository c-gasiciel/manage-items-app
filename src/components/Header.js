import React from 'react';
import styled from 'styled-components';


const Header = ({pageTitle}, props) =>{
    return(
        <StyledHeader>
            <h1>{ pageTitle }</h1>
        </StyledHeader>  
    );
}

export default Header;

const StyledHeader = styled.header` 
    text-align: center;
`;