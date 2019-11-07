import React from 'react'

function Form() {
  return (
    <div>
      <form className="form">
        <h3 className="header">Team-Builder App</h3>
        <label className="label">
          first name: <input className="input" id="fName" type="text" />
        </label>
        <label className="label">
          last name: <input className="input" id="lName" type="text" />
        </label>
        <label className="label">
          email: <input className="input" id="eMail" type="text" />
        </label>
        <label className="label">
          role:{' '}
          <select className="input" id="role">
            <option />
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>UX/UI Designer</option>
            <option>Software Developer</option>
            <option>Tester</option>
          </select>
        </label>
      </form>
    </div>
  )
}

export default Form
