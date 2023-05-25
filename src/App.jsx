import React from 'react'
import FooterDiv from './Components/FooterDiv/FooterDiv'
import NavBar from './Components/NavBar/NavBar'
import JobDiv from './Components/JobDiv/JobDiv'
import SearchDiv from './Components/SearchDiv/SearchDiv'
import ValueDiv from './Components/ValueDiv/ValueDiv'
const App = () => {
  return (
    <div>
      <div className="w-[85%] m-auto bg-white">
        <NavBar/>
        <SearchDiv/>
        <JobDiv/>
        </div>
    </div>
  )
}

export default App