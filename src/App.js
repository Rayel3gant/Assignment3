import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [mode,setMode]=useState('dark')
  localStorage.setItem("mode","dark")

  return (
    <div className={`App w-full min-h-screen ${(mode==="dark") ? ("bg-gradient-to-r from-[#5a5c6a] to-[#202d3a]") :("bg-[#E6E8FA]")}`}>
      <Navbar mode={mode} setMode={setMode} />
      <div className='w-full h-[1px] bg-black'/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourites/>} />
      </Routes>
        
    </div>
  );
}

export default App;


// background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );