import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/' element={<About />} />

        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
