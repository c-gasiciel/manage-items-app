import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';


const Form = (props) =>{
    return(
        <FormCard>
            <form>
                <TextField id="outlined-basic" label="" variant="outlined" />
                <Button variant="contained">Add item</Button>
            </form>
      </FormCard>
    );
}

export default Form;

const FormCard = styled.section` 
    background: #D7D2CB;
    margin: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
`;