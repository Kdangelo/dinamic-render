import { useState } from 'react';
import './componentes/Navbar'
import Navbar from './componentes/Navbar';
import { BaseColaboradores } from './data/BaseColaboradores';
import List from './componentes/List';

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);
  return (
    <div className="container-fluid">
      <Navbar />
      <hr />
      <div className='container'>
        <List baseColaboradores={baseColaboradores}/>
      </div>
    </div>
  );
}

export default App;
