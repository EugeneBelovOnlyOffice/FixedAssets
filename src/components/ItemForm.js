import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, } from '@mui/material'
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
const ItemForm = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }

    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>


                    <Typography variant='caption' gutterBottom>Please fill this form to create an Item</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Select type" />

                    <TextField fullWidth label='Model' placeholder="Enter model" />
                    <TextField fullWidth label='SN' placeholder="Enter SN" />
                    <TextField fullWidth label='FA' placeholder="Enter inventory number" />
                    <TextField fullWidth label='Owner' placeholder="Enter owner" />
                    <TextField fullWidth label='Responcible' placeholder="Select responcible" />
                    <TextField fullWidth label='Dept' placeholder="Select department" />
                    <TextField fullWidth label='Notes' placeholder="Notes" />
                    <FormControl component="fieldset" style={marginTop}>

                    </FormControl>

                    <Button variant="outlined" color="primary" >Submit</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default ItemForm;