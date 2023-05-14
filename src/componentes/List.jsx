import React from "react"

const List = ({ baseColaboradores, filterList }) => {
  const filterCollaborator = baseColaboradores.filter((baseColaboradores) => {
    const item = filterList.toLowerCase()
    return (baseColaboradores.nombre.toLowerCase().includes(item) ||
            baseColaboradores.correo.toLowerCase().includes(item)
    )
  })
  return (
    <ul>
      { filterCollaborator.map(colaborador => <li key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>) }
    </ul>
  )
}

export default List;
