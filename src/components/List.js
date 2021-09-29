import React from 'react';
import styled from 'styled-components';

const List = (props) =>{
    return(
        <ListContainer>
            <UnorderedList>
                <ListItemCard>Item 1</ListItemCard>
                <ListItemCard>Item 2</ListItemCard>
                <ListItemCard>Item 3</ListItemCard>
            </UnorderedList>
        </ListContainer>
    );
}

export default List;


const ListContainer = styled.section` 
    background: #DDC9A2;
    margin: .5em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UnorderedList = styled.ul` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    width: 60%;
`;


const ListItemCard = styled.li`
    background: #C28EA0;
    box-sizing: border-box;
    margin: .3em 0em;
    padding: .5em 1em;
    width: 60%;
`;

