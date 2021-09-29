import React from 'react';
import styled from 'styled-components';

const ListItem = ({ itemText }) =>{
    return(
        <ListItemCard>
            { itemText }
            <RemoveButton>+</RemoveButton>
        </ListItemCard>
    );
}

export default ListItem;

const ListItemCard = styled.li`
    background: #C28EA0;
    box-sizing: border-box;
    color: white;
    margin: .3em 0em;
    padding: .5em 1em;
    width: 60%;

    display: flex;
    justify-content: space-between;
`;


const RemoveButton = styled.button` 
    background: transparent;
    border: none;
    font-weight: bold;
    font-size: 1.3em;
    transform: rotate(45deg);
`;