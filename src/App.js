import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './Components/Shared/Headers/Headers';
import MainNav from './Components/Shared/MainNav/MainNav';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';

function App() {
  return (
    <>
      <Headers/>
      <Routes>
        <Route path='/' element={<Trending/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <MainNav/>
    </>
  );
}

export default App;
