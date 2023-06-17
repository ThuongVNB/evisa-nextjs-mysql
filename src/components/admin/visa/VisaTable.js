"use client";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import VisaEdit from './VisaEdit';
import VisaDelete from './VisaDelete';
import VisaAdd from './VisaAdd';
import VisaDetail from './VisaDetail';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'country_id', headerName: 'Quốc gia', width: 130 },
  { field: 'type_visa', headerName: 'Loại visa', width: 130 },
  {field: 'validity', headerName: 'Hiệu lực', width: 200},
  {field: 'processing_times', headerName: 'Thời gian xử lý', width: 200},
  {field: 'standard_fee', headerName: 'Chi phí', width: 200},
  {field: 'goverment_fee', headerName: 'Phí Chính phủ', width: 200},
  {field: 'requirement_desc', headerName: 'Điều kiện thêm', width: 500},
  {field: 'currency', headerName: 'Đơn vị tiền', width: 100},
  {field: 'published', headerName: 'Trạng thái', width: 120},
];

const rows = [
  {id: 1, country_id: 'Vietnam', type_visa: 'eVisa', validity: '60 days', processing_times: '20 days', standard_fee: 120, goverment_fee: 25, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Đang sử dụng'},
  {id: 2, country_id: 'Cambodia', type_visa: 'Tourist Visa', validity: '60 days', processing_times: '20 days', standard_fee: 120, goverment_fee: 20, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Tạm ngưng'},
  {id: 3, country_id: 'Laos', type_visa: 'eVisa', validity: '60 days', processing_times: '20 days', standard_fee: 120, goverment_fee: 30, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Đang sử dụng'},
  {id: 4, country_id: 'Thailand', type_visa: 'eVisa', validity: '60 days', processing_times: '20 days', standard_fee: 120, goverment_fee: 15, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Tạm ngưng'},
]

export default function VisaTable() {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([])
    // const fetchData = async () => {
    //     let response = await (
    //       await fetch("https://reqres.in/api/Visas?page=1")
    //     ).json();
    //     setData(response.data);
    // };
    useEffect(() => {
        // fetchData();
        setData(rows)
    }, []);

    const handleSelectRow = (list) => {
      let listrowSelected = [];
      list.map((item, index) => {
        const rowSelected = data.find((item) => item.id == list[index])
        listrowSelected.push(rowSelected)
      })
      
      setSelectedRow(listrowSelected);
    }
  return (
    <>
      <DataGrid
        onRowSelectionModelChange={handleSelectRow}
        // rows={data}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    <div className='visa-control'>
      <VisaAdd />
      <VisaEdit selectedRow={selectedRow} />
      <VisaDetail selectedRow={selectedRow}/>
      <VisaDelete selectedRow={selectedRow} />  
    </div>
    </>
  );
}