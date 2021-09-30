import React from 'react';
import { styled } from '@material-ui/styles';

const ListItem = ({ itemId, itemText }) =>{
    
    return(
        <StyledListItem key={ itemId }>
            { itemText }
            <RemoveButton
                type="button"
                onClick={() => alert("Remove item " + itemId)}
            >+</RemoveButton>
        </StyledListItem>
    );
}

export default ListItem;


const StyledListItem = styled('li')({    
    background: '#C28EA0',
    boxSizing: 'border-box',
    color: 'white',
    margin: '.3em 0em', 
    padding: '.5em 1em',
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
});


const RemoveButton = styled('button')({    
    background: 'transparent',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1.3em',
    transform: 'rotate(45deg)'
});