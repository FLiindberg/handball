import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import PostDetails from './Components/PostDetails';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/posts/:id' element={<PostDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  )
}

export default App;
