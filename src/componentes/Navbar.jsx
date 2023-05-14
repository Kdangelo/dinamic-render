import React from "react"

const Navbar = ({ onChanges }) => {

const  handleChangeInput = (e) => {
  console.log(e.target.value)
  onChanges(e.target.value)
}

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand text-white">Buscador de colaboradores</p>
        <form className="d-flex" role="search">
          <input className="form-control me-2" onChange={ handleChangeInput } type="search" placeholder="Busca un colaborador" />
        </form>
      </div>
    </nav>
  )
}

export default Navbar;
