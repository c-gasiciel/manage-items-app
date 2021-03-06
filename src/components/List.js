import React, { useContext } from 'react';
import { styled } from '@material-ui/styles';
import ListItem from './ListItem';
import { ListContext } from '../App';



const List = (props) =>{
    /* Get current state from Context */
    const { state } = useContext(ListContext);

    return(
        <ListContainer>
            <ItemCount>
                <h2>My Items ({ state.length })</h2>
            </ItemCount>
            <UnorderedList>
                { state.map((item)=><ListItem
                    key={ item.itemId } 
                    itemId={ item.itemId } 
                    itemText={ item.itemText } />
                )}
            </UnorderedList>
        </ListContainer>
    );
}

export default List;


/* Styling */
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

