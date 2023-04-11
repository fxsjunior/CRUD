import { Table, Thead, Tr, Th, Tbody, Td } from "./styles";
import axios from 'axios';
import { useState } from "react";
import { FaEdit, FaTrash, faEdit} from 'react-icons/fa';
import { toast } from 'react-toastify';

const Grid = ({users}) => {
    
    
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
                         <Td alignCenter width="5%" ><FaEdit/></Td>
                         <Td alignCenter width="5%" ><FaTrash /></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
     );
}
 
export default Grid;