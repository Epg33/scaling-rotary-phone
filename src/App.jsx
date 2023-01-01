import { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Loading from './components/loading/Loading.jsx'

const Home = lazy(()=>import('./components/home/Home.jsx'))
const Nav = lazy(()=>import('./components/navbar/Nav.jsx'))
const Genres = lazy(()=>import('./components/genres/Genres.jsx'))
const Movies = lazy(()=>import('./components/Movies/Movies.jsx'))
const People = lazy(()=>import('./components/People/People.jsx'))
const Search = lazy(()=>import('./components/Search/Search.jsx'))
const Trending = lazy(()=>import('./components/Trending/Trending.jsx'))
const Tv = lazy(()=>import('./components/Tv/Tv.jsx'))
const Error = lazy(()=>import('./components/error/Error'))

function App() {
  return (
    <main className='body'>
      <Router>
        <Nav />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/genres' element={<Genres />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/people' element={<People />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/trending' element={<Trending />}></Route>
            <Route path='/tv' element={<Tv />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </main>
  )
}

export default App
