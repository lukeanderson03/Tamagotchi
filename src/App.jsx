import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/home'
import { About } from './Pages/about'
import { Store } from './Pages/store'
import { Layout } from './Layout'

// CREATE LINKS TO DIFFERENT PARTS OF WEBSITE ^
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
