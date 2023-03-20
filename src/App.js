import logo from './logo.svg';
import Home from './Home';
import Movie from './Components/Movie';
import Error from './Error';
import { AppProvider } from './context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css'

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />     
          <Route path="movie/:id" element={<Movie/>} /> 
          <Route path="*" element={<Error/>} />      
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
