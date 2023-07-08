import logo from './logo.svg';
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  console.log("formData")
  return (
    <div className="App">
      <Router>
     <Home />
      </Router>
    </div>
  );
}

export default App;
 