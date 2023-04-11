import { Table, Thead, Tr, Th, Tbody, Td } from "./styles";
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Grid = ({ users, setUsers, setOnEdit }) => {

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800" + id)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.id !== id)

                setUsers(newArray)
                toast.success(data)
            })
            .catch(({ data }) => toast.error(data))

        setOnEdit(null)

    }

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyweb >Fone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="30%" onlyweb >{item.fone}</Td>
                        <Td alignCenter width="5%" ><FaEdit /></Td>
                        <Td alignCenter width="5%" ><FaTrash onClick={() => handleDelete(item.id)} /></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}

export default Grid;