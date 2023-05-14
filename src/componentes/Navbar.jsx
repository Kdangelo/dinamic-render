
const Navbar = () => {
const  handleChange = (e) => {
  console.log(e.target.value)
}
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand text-white">Buscador de colaboradores</p>
        <form className="d-flex" role="search">
          <input className="form-control me-2" onChange={handleChange} type="search" placeholder="Busca un colaborador" />
        </form>
      </div>
    </nav>
  )
}

export default Navbar;
