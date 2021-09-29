import React from 'react';
import { styled } from '@material-ui/styles';
//import styled from 'styled-components';

const FormCard = styled('section')({
    background: '#D7D2CB',
    margin: '0.5em',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}); 

const StyledForm = styled('form')({
    boxSizing: 'border-box',
    padding: '.5em',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
});

const CustomTextField = styled('input')({
    background: 'white',
    border: '1px solid gray',
    height: '2em',
    marginRight: '.2em',
    width: '35%',
});

const SubmitButton = styled('button')({
    padding: '.2em 2em',
});



const Form = (props) =>{
    return(
        <FormCard>
            <StyledForm>
                <CustomTextField 
                    id="itemInput" 
                    label="" 
                    value=""
                    variant="outlined" />
                <SubmitButton>
                    Add item
                </SubmitButton>
            </StyledForm>
      </FormCard>
    );
}

export default Form;


