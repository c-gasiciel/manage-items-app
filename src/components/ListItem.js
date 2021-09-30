import React, { useContext } from 'react';
import { styled } from '@material-ui/styles';
import { ListContext } from '../App';


const ListItem = ({ itemId, itemText }) =>{
    /* Get dispatch function from Context */
    const { dispatch } = useContext(ListContext);
    
    return(
        <StyledListItem>
            { itemText }
            <RemoveButton
                type="button"
                onClick={() => dispatch({
                    type: 'removeItem', 
                    payload: itemId}
                )}
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