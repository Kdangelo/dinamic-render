const List = ({ baseColaboradores }) => {
  return (
    <ul>
      {baseColaboradores.map(colaborador => <li key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>)}
    </ul>
  )
}

export default List;