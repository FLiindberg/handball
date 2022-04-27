import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CreatePosts() {
  
  return (
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
            <TextField id="outlined-basic" label="Titel" variant="outlined" />
            <TextField id="outlined-basic" label="Beskrivning" variant="outlined" />
            <TextField id="outlined-basic" label="Länk" variant="outlined" />
        </Box>
    )}

export default CreatePosts;