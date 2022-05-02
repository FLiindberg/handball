import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import './style.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function GetPosts(){

    let navigate = useNavigate();
    
    const postsUrl = `https://localhost:7018/api/Posts`
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(posts.length === 0) {
            fetch(postsUrl).then(res => res.json().then(data => setPosts(data)))
        }
    })

    function GoBack() {
        navigate(`/`);
    }

    function ViewPosts(id) {
        navigate(`/ViewPosts/${id}`);
    }

    function CreatePosts() {
        navigate(`/CreatePosts`);
    }

return(
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Titel</TableCell>
            <TableCell align="right">Beskrivning</TableCell>
            <TableCell align="right">Länk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.description}</TableCell>
              <TableCell align="right">{item.link}</TableCell>
                <ButtonGroup variant="contained" align="right" aria-label="outlined primary button group">
                    <Button onClick={()=>ViewPosts(item.postId)}>Läs mer</Button>
                    <Button onClick={()=>CreatePosts()}>Skapa inlägg</Button>
                </ButtonGroup>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}

export default GetPosts;
