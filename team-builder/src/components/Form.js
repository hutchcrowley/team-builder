import React, { useState } from 'react'

const Form = (props) => {
  const [member, setMember] = useState({
    id: '',
    name: '',
    image: '',
    eMail: '',
    role: ''
  })

  const handleChanges = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const newGuy = {
      ...member,
      id: Date.now()
    }
    props.addNewMember(newGuy)
    setMember(newGuy)
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input
          className="input"
          placeholder="Enter Name"
          id="name"
          name="name"
          type="text"
          value={member.name}
          onChange={handleChanges}
        />
        <label htmlFor="id">ID: </label>
        <input
          className="input"
          placeholder="Enter Member ID"
          id="id"
          name="id"
          type="text"
          value={member.lName}
          onChange={handleChanges}
        />
        <label className="email">eMail: </label>
        <input
          className="input"
          placeholder="Enter Email"
          id="email"
          name="eMail"
          type="text"
          value={member.eMail}
          onChange={handleChanges}
        />
        <label className="role">
          role:{' '}
          <select
            className="input"
            id="role"
            name="role"
            value={member.role}
            onChange={handleChanges}
          >
            <option />
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>UX/UI Designer</option>
            <option>Software Developer</option>
            <option>Tester</option>
          </select>
        </label>
        <button className="submit-button">Add</button>
      </form>
    </div>
  )
}

export default Form
