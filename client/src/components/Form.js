import React from 'react'

const Form = (props) => {
   return (
      <form onSubmit={props.addPersonAction}>
         <div>
            Name: <input id='name' value={props.newName} onChange={props.handleNameChange} />
         </div>
         <div>
            Number: <input id='number' value={props.newNumber} onChange={props.handleNumberChange} />
         </div>
         <div>
            <button id='submit' type="submit">add</button>
         </div>
      </form>
   )
}

export default Form

