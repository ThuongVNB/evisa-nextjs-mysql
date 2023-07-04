'use client';
import stylesSystem from '@/app/page.module.css';
import { CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { columns } from './TypeVisaModel';
import TypeVisaAdd from './TypeVisaAdd';
import TypeVisaEdit from './TypeVisaEdit';
import TypeVisaDetail from './TypeVisaDetail';
import TypeVisaDelete from './TypeVisaDelete';

export default function TypeVisaTable() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState([])

  const onAdd = async (newData) => {
    console.log('onAdd');
  }
  const onEdit = (newData) => {
    console.log("onedit");
  }
  const onDelete = (listData) => {
    console.log("ondelete");
  }
  const handleSelectRow = (list) => {
    let listrowSelected = [];
    list.map((item, index) => {
      const rowSelected = data.find((item) => item.id == list[index])
      listrowSelected.push(rowSelected)
    })
    setSelectedRow(listrowSelected);
  }

  useEffect(() => {
    setLoading(false)
  },[])

  return (
    <>
        {loading ? <CircularProgress /> : 
        <DataGrid
            onRowSelectionModelChange={handleSelectRow}
            // rows={data}
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
        }
        <div className={stylesSystem.admin__table__control}>
            <TypeVisaAdd onAdd={onAdd} />
            <TypeVisaEdit onEdit={onEdit} selectedRow={selectedRow} />
            <TypeVisaDetail selectedRow={selectedRow}/>
            <TypeVisaDelete onDelete={onDelete} selectedRow={selectedRow} />  
        </div>
    </>
  )
}
