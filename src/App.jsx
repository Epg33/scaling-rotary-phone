import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Collections from './components/collections/Collections.jsx'
import Home from './components/home/Home.jsx'
import Nav from './components/navbar/Nav.jsx'
import Genres from './components/genres/Genres.jsx'
import Movies from './components/Movies/Movies.jsx'
import People from './components/People/People.jsx'
import Search from './components/Search/Search.jsx'
import Trending from './components/Trending/Trending.jsx'
import Tv from './components/Tv/Tv.jsx'
import Error from './components/error/Error'

function App() {
  return (
    <main className='body'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/collections' element={<Collections />}></Route>
          <Route path='/genres' element={<Genres />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/people' element={<People />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/trending' element={<Trending />}></Route>
          <Route path='/tv' element={<Tv />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App
