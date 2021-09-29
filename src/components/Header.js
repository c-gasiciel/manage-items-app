import React from 'react';
import { styled } from '@material-ui/styles';

const StyledHeader = styled('header')({
    textAlign: 'center',
});

const Header = ({pageTitle}) =>
        <StyledHeader>
            <h1>{ pageTitle }</h1>
        </StyledHeader>  

export default Header;

