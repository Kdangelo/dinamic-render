import { useState } from 'react';
import './componentes/Navbar'
import Navbar from './componentes/Navbar';
import { BaseColaboradores } from './data/BaseColaboradores';
import List from './componentes/List';
import Form from './componentes/Form';

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);
  const [filtered, setFilter] = useState('')
  const handleChanges = (e) => {
    setFilter(e)
  }
  const handleNewCollaborator = (collaborator) => {
    const newCollaborator = {
      ...collaborator,
      id: baseColaboradores.length +1
    }
    setBaseColaboradores([...baseColaboradores, newCollaborator])
  }

  return (
    <div className="container-fluid">
      <Navbar onChanges = { handleChanges } />
      <Form onSubmit = { handleNewCollaborator } />
      <hr />
      <div className='container'>
        <List baseColaboradores = { baseColaboradores } filterList = { filtered }/>
      </div>
    </div>
  );
}

export default App;
