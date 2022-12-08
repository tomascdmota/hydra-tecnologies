import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import Quote from './Components/Quote/Quote';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/getQuote" element={<Quote/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
