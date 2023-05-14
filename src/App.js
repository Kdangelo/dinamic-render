import { useState } from 'react';
import './componentes/Navbar'
import Navbar from './componentes/Navbar';
import { BaseColaboradores } from './data/BaseColaboradores';
import List from './componentes/List';

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);
  const [filtered, setFilter] = useState('')
  const handleChanges = (e) => {
    setFilter(e)
  }
  return (
    <div className="container-fluid">
      <Navbar onChanges = { handleChanges } />
      <hr />
      <div className='container'>
        <List baseColaboradores = { baseColaboradores } filterList = { filtered }/>
      </div>
    </div>
  );
}

export default App;
