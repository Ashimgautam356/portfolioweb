import React from 'react'
import Left from './Components/Left' 
import Right from './Components/Right.jsx'
import './App.css'
import './Style/Responsive.sass'
const App = () => {
  return (
    <section className='main' id='main'>
      <section className="leftBox">
        <Left></Left>
      </section>
      <section className="rightBox" id='scrollDiv'>
        <Right></Right>
      </section>      
    </section>
  )
}

export default App