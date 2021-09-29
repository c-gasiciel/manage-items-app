import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = (props) =>{
    return(
        <ListContainer>
            <UnorderedList>
                <ListItem itemText="Item 1" />
                <ListItem itemText="Item 2"/>
                <ListItem itemText="Item 3" />
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

