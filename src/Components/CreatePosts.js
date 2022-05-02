import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreatePosts() {

    //const postUrl = `https://localhost:7018/api/Posts`

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    
    const onSubmit =(e) => {
        e.preventDefault();
        const post = { title, description, link };

        fetch(`https://localhost:7018/api/Posts`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('new post added');
            GoBack()
        })
    }

    let navigate = useNavigate();

    // const addPost = async (post) => {
    // const res = await fetch(postUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(post)
    // })
    // }

    function GoBack() {
        navigate(`/`);
    }

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     addPost({ title: Title, description: Description, link: Link })
    //     GoBack()
    // }

  return (
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
    >
            <TextField id="outlined-basic" label="Titel" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" />
            <TextField id="outlined-basic" label="Beskrivning" value={description} onChange={(e) => setDescription(e.target.value)} variant="outlined" />
            <TextField id="outlined-basic" label="Länk" value={link} onChange={(e) => setLink(e.target.value)} variant="outlined" />

            <input type='submit' value='Skapa inlägg' className='btn btn-block' />
            <Button onClick={()=>GoBack()}>Gå tillbaka</Button>
        </Box>
    )}

export default CreatePosts;