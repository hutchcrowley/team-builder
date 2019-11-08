import React, { useState } from 'react'

function Form() {
  const [member, setMember] = useState({
    fName: '',
    lName: '',
    eMail: '',
    role: ''
  })

  const handleChange = (event) => {
    setMember({ ...member, [event.targe.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMember({ fName: '', lName: '', eMail: '', role: '' })
  }

  return (
    <div className="App">
      <div className="members-list">

      </div>

      <div className="app-header">
        <h2 className="header">Team-Builder App</h2>
      </div>
      <form className="form" onSubmit={(event) => handleSubmit()}>
        <label className="label">
          first name:{' '}
          <input
            className="input"
            name="fName"
            type="text"
            value={member.fName}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className="label">
          last name:{' '}
          <input
            className="input"
            name="lName"
            type="text"
            value={member.lName}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className="label">
          email:{' '}
          <input
            className="input"
            name="eMail"
            type="text"
            value={member.eMail}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label className="label">
          role:{' '}
          <select
            className="input"
            name="role"
            value={member.role}
            onChange={(event) => handleChange(event)}
          >
            <option />
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>UX/UI Designer</option>
            <option>Software Developer</option>
            <option>Tester</option>
          </select>
        </label>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default Form
