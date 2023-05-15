import React from "react"
import { useState } from "react"

const Form = ({ onSubmit }) => {
  const [collaborator, setCollaborator] = useState({
    id: null,
    nombre: '',
    correo: ''
  })  
  const handleChandeForm = (e) => {
    console.log(collaborator)
    setCollaborator({
      ...collaborator, [e.target.id]: e.target.value
    })
  }
  const setNewCollaborator = (e) => {
    e.preventDefault()
    onSubmit(collaborator)
   
  }

  return (
    <form onSubmit = { setNewCollaborator }>
      <div className="mb-3 mt-3">
        <label className="form-label">Nombre del colaborador</label>
        <input type="text" className="form-control" id="nombre" onChange={ handleChandeForm } placeholder="Ingresa el nombre del colaborador" />
      </div>
      <div className="mb-3">
        <label className="form-label">Correo del colaborador</label>
        <input type="text" className="form-control" id="correo" onChange={ handleChandeForm } placeholder="Ingresa correo del colaborador" />
      </div>
      <button type="submit" className="btn btn-success">Agregar colaborador</button>
    </form>
  )
}

export default Form
