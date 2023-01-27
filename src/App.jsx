import { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Loading from './components/loading/Loading.jsx'
import './App.css'

const Home = lazy(()=>import('./components/home/Home.jsx'))
const Nav = lazy(()=>import('./components/navbar/Nav.jsx'))
const CellNav = lazy(()=>import('./components/navbar/CellNav.jsx'))
const Movies = lazy(()=>import('./components/Movies/Movies.jsx'))
const People = lazy(()=>import('./components/People/People.jsx'))
const Search = lazy(()=>import('./components/Search/Search.jsx'))
const Trending = lazy(()=>import('./components/Trending/Trending.jsx'))
const Tv = lazy(()=>import('./components/Tv/Tv.jsx'))
const Movie = lazy(()=>import('./components/unique/movie/Movie'))
const Person = lazy(()=>import('./components/unique/person/Person'))
const Show = lazy(()=>import('./components/unique/show/Show'))
const Error = lazy(()=>import('./components/error/Error'))

function App() {
  return (
    <main className='body'>
      <Router>
        <div className='navBar'>
          <Nav />
        </div>
        <div className='cell-navBar'>
          <CellNav />
        </div>
        <Suspense fallback={<div style={{height: '100vh', width: '100vw', backgroundColor: '#012', display: 'grid', placeContent: 'center'}}><Loading /></div>}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/people' element={<People />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/trending' element={<Trending />}></Route>
            <Route path='/tv' element={<Tv />}></Route>
            <Route path='/tv/:id' element={<Show />}></Route>
            <Route path='/movies/:id' element={<Movie />}></Route>
            <Route path='/people/:id' element={<Person />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </main>
  )
}

export default App
