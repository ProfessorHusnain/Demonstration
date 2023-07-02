import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      </Router>
       
    </div>
  );
}

export default App;
