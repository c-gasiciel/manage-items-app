import React from 'react';

const Header = ({pageTitle}, props) =>{
    return(
        <header className="App-header">
            <h1>{ pageTitle }</h1>
        </header>  
    );
}

export default Header;