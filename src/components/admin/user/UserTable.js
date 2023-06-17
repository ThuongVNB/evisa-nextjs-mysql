"use client";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import UserEdit from './UserEdit';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
  {field: 'email', headerName: 'email', width: 200},
  {field: 'avatar', headerName: 'avatar', width: 300}
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function UserTable() {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([])
    const fetchData = async () => {
        let response = await (
          await fetch("https://reqres.in/api/users?page=1")
        ).json();
        setData(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleSelectRow = (list) => {
      setSelectedRow([...list]);
    }
  return (
    <>
      <DataGrid
        onRowSelectionModelChange={handleSelectRow}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    <UserEdit selectedRow={selectedRow} />
    </>
  );
}