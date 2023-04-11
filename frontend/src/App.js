import GlobalStyle from './styles/global'
import { useState } from 'react'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Container, Title } from './styles/appStyles'
import Form from './components/Form/Form';
import Grid from './components/Grid';
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)

    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
        <ToastContainer autoClose={2500} position={toast.POSITION.BOTTOM_LEFT} />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
