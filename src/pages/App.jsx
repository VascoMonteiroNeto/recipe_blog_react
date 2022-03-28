import { useState } from 'react'
import './App.css'
import Home from './HomePage/Home.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Category from './Category/Category'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Searched from './Search/Searched'
import Details from './RecipeDetails/Details'



function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <SearchBar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/category/:type' element={<Category />} />
          <Route path='/search/:query' element={<Searched />} />
          <Route path='/recipe/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
