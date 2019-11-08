import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import MembersList from './components/MembersList'
import './App.css'

import data from './components/data'

const App = () => {
  const [members, setMembers] = useState([])

  useEffect(() => {
    setMembers(data)
  }, [])

  const addMember = (guy) => {
    const newGuy = setMembers([...members, guy])
  }

  return (
    <div className="App">
      <Form addMember={addMember} />
      {members.map((member) => {
        return <MembersList key={member.id} info={member} />
      })}
    </div>
  )
}

export default App
