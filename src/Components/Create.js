import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
 
 const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [author, setAuthor] = useState('');
    const [team, setTeam] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit =(e) => {
        e.preventDefault();
        const post = { title, description, link, author, team };
        fetch('https://localhost:7018/api/Posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('new post added');
            navigate(`/`);
        })
    }
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
                <label>Beskrivning</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label>Länk till video</label>
                <input 
                    type="text"
                    required
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <label>Ditt namn</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Vilket lag du tillhör</label>
                <input
                    type="text"
                    required
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                />
                <button>Skapa Inlägg</button>
                <p>{ title }</p>
                <p>{ description }</p>
                <p>{ link }</p>
                <p>{ author }</p>
                <p>{ team }</p>
            </form>
        </div>
    );
}
  
 export default Create;