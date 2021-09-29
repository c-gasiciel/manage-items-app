import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = (props) =>{
    const myList = ["Draw", "Clean", "Finish this project", "Read"];


    return(
        <ListContainer>
            <h2>My Items ({ myList.length })</h2>
            <UnorderedList>
                { myList.map(item => <ListItem itemText={ item }/>)}
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

