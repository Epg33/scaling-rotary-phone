import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Nav from './components/navbar/Nav.jsx'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
