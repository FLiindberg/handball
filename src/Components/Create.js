import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css'

function Create() {

    //const postUrl = `https://localhost:7018/api/Posts`

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    
    const handleSubmit =(e) => {
        e.preventDefault();
        const post = { title, description, link };
        fetch('https://localhost:7018/api/Posts', {
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
    <div className="create">
        <h2>Skapa Nytt Inlägg</h2>
        <form onSubmit={handleSubmit}>
            <label>Titel</label>
            <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description</label>
            <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>Link</label>
            <input 
                type="text"
                required
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <button>Skapa Inlägg</button>
            <p>{ title }</p>
            <p>{ description }</p>
            <p>{ link }</p>
        </form>
    </div>
    // <Box>
    //     <form noValidate autoComplete="off"  onSubmit={onSubmit}>
    //     <div>
    //     <TextField id="outlined-basic" label="Titel" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" />
    //     <TextField id="outlined-basic" label="Beskrivning" value={description} onChange={(e) => setDescription(e.target.value)} variant="outlined" />
    //     <TextField id="outlined-basic" label="Länk" value={link} onChange={(e) => setLink(e.target.value)} variant="outlined" />
    //     </div>
    //     <br></br>
    //     <input type='submit' value='Skapa Inlägg' className='btn btn-block' />
    //     <Button onClick={()=>GoBack()}>Gå tillbaka</Button>
    //     </form>
    // </Box>
)}

export default Create;