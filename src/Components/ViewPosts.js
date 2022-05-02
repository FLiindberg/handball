import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function ViewPosts(){

    let navigate = useNavigate();
    
    const [posts, setPosts] = useState([]);
    
    const{id} = useParams(); 
    
    const postUrl = `https://localhost:7018/api/Posts/${id}`
    useEffect(() => {
        if (posts.length === 0) {
            fetch(postUrl).then(res => res.json().then(data => setPosts(data)))
        }
    }, [posts, id])

    function GoBack() {
        navigate(`/`);
    }

    function CreatePosts() {
        navigate(`/CreatePosts`);
    }

    return(
        <div>
        <label>Titel</label>
        <TextField id="outlined-basic" type='text' label={posts.title} multiline maxRows={20} variant="outlined" />
        <label>Beskrivning</label>
        <TextField id="outlined-basic" type='text' label={posts.description} multiline maxRows={20} variant="outlined" />
        <label>Länk</label>
        <TextField id="outlined-basic" type='text' label={posts.link} multiline maxRows={20} variant="outlined" />
        <ButtonGroup variant="contained" align="right" aria-label="outlined primary button group">
            <Button onClick={()=>GoBack()}>Gå tillbaka</Button>
            <Button onClick={()=>CreatePosts()}>Skapa inlägg</Button>
        </ButtonGroup>
        </div> 
    )}

export default ViewPosts;