import GetPosts from './Components/GetPosts';
import ViewPosts from './Components/ViewPosts';
import CreatePosts from './Components/CreatePosts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">Hem</Link>
      <Link class="navbar-brand" to="/CreatePosts">Skapa inlägg</Link>
      <div>
        <ul class="navbar-nav">
        </ul>
      </div>
      </nav>
    <Routes>

    <Route path='/' element={<GetPosts />} />
    <Route path='/CreatePosts' element={<CreatePosts />} />
    <Route path='/ViewPosts/:id' element={<ViewPosts />} />
    
    </Routes>
    </Router>
    
  )
}

export default App;
