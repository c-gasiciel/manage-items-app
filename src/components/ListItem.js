import React from 'react';
import styled from 'styled-components';

const ListItem = ({ itemText }) =>{
    return(
        <ListItemCard>{ itemText }</ListItemCard>
    );
}

export default ListItem;

const ListItemCard = styled.li`
    background: #C28EA0;
    box-sizing: border-box;
    margin: .3em 0em;
    padding: .5em 1em;
    width: 60%;
`;
