import React, { useState, useContext } from 'react';
import uniqid from 'uniqid';
import { styled } from '@material-ui/styles';
import { ListContext } from '../App';


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
    /*  Grab context from App */ 
    const { dispatch } = useContext(ListContext);

    /* Set up initial state of the form */
    const initialState = {
        item: '',
    };

    const [userInput, setUserInput] = useState({initialState});

    const handleChange = event =>{
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        /* Only process item if user typed something */
        if(userInput.item !== ''){
            console.log(userInput.item);
        
            dispatch({ 
                type: 'addItem', 
                payload:{ itemId: uniqid(), itemText: userInput.item }
            });

            setUserInput({ item: '' });
        }
    }

    return(
        <FormCard>
            <StyledForm onSubmit={ handleSubmit }>
                <CustomTextField 
                    id="item" 
                    name="item"
                    type="text" 
                    value={ userInput.item || "" }
                    onChange={ handleChange }
                 />
                <SubmitButton>
                    Add item
                </SubmitButton>
            </StyledForm>
      </FormCard>
    );
}

export default Form;


