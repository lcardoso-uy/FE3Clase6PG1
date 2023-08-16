import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  const [usuarios, setUsuarios] = useState([])

  const addUser = (user) => {
    setUsuarios([...usuarios,user])
  }

  return (
    <div className='App'>
      <h1>Registro de Usuarios</h1>
      <Form onAddUser={addUser}/>
    </div>

  )
}

export default App
