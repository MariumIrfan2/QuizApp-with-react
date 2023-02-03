import { Button, Grid } from "@mui/material";
import { useState } from 'react';


function ShowOption(props) {
    return (
        < Grid container >

            <Grid item md={12}><Button className='p-2 m-2 w-50 fs-6 bg-secondary'
                variant='contained'
                onClick={props.onClick}>{props.optionVal}</Button>

            </Grid>
        </Grid >

    )
}

export default ShowOption