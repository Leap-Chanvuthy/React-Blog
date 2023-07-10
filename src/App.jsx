import Navbar from './Navbar';
import Home from './Home';
import Create from './create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className='content'>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
