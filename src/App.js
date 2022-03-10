import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Component/Home/Home';
import Navbare from './Component/Navbare/Navbare';
import Data from './Component/Products/Data';

function App() {
  return (
    <div className="App">
      <Navbare />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/products' element={<Data  />} /> 
      </Routes>


    </div>
  );
}
export default App;
