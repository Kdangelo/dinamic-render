import React from "react"
import { useState } from "react"

const Form = ({ onSubmit }) => {
  const [collaborator, setCollaborator] = useState({
    id: null,
    nombre: '',
    correo: ''
  })  
  const handleChandeForm = (e) => {
    setCollaborator({
      ...collaborator, [e.target.id]: e.target.value
    })
  }
  const setNewCollaborator = (e) => {
    e.preventDefault()
    if (!collaborator.nombre || !collaborator.correo) {
      alert("debe ingresar un nombre y un correo")
      return
    } 
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
        <input type="email" className="form-control" id="correo" onChange={ handleChandeForm } placeholder="Ingresa correo del colaborador" />
      </div>
      <button type="submit" className="btn btn-success">Agregar colaborador</button>
    </form>
  )
}

export default Form
