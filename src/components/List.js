import React from 'react';
import { styled } from '@material-ui/styles';
import ListItem from './ListItem';

const List = (props) =>{
    const myList = [
        { itemId: "0", itemText: "Draw" }, 
        { itemId: "1", itemText: "Clean"}, 
        { itemId: "2", itemText:"Finish this project"}, 
        { itemId: "3", itemText: "Read"}
    ];


    return(
        <ListContainer>
            <ItemCount>
                <h2>My Items ({ myList.length })</h2>
            </ItemCount>
            <UnorderedList>
                { myList.map((item, index)=><ListItem 
                    itemId={ item.itemId } 
                    itemText={ item.itemText } 
                    itemIdx={ index }/>
                )}
            </UnorderedList>
        </ListContainer>
    );
}

export default List;


const ListContainer = styled('section')({    
    background: '#DDC9A2',
    margin: '.5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const ItemCount = styled('div')({    
    display: 'flex',
    alignItems: 'flex-start',
    width: '65%',
}) ;

const UnorderedList = styled('ul')({    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    listStyle: 'none',
    width: '60%'
});

