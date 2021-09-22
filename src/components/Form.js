import React from 'react';
import { Button, TextField } from '@material-ui/core';


const Form = (props) =>{
    return(
        <section>
            <form>
                <TextField id="outlined-basic" label="" variant="outlined" />
                <Button variant="contained">Add item</Button>
            </form>
      </section>
    );
}

export default Form;