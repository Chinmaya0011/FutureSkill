import React from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Cards from './components/Cards'
import Footer from './components/Footer'
import { CreateProvider } from './Context/CreateContext'
const App = () => {
  return (
    <div>
      <CreateProvider>
      <Header/>
      <SearchBar/>
      <Cards/>
      <Footer/>
      </CreateProvider>
    </div>
  )
}

export default App