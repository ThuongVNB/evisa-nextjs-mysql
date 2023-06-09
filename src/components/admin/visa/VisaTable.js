"use client";
import stylesSystem from '@/app/page.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import VisaEdit from './VisaEdit';
import VisaDelete from './VisaDelete';
import VisaAdd from './VisaAdd';
import VisaDetail from './VisaDetail';
import { CircularProgress} from '@mui/material';
import { columns, rows } from './VisaModel';
import { getDataCurrency } from '../currency/getDataCurency';
import { getAllTypeVisa } from '../type_visa/getData';
import { getAllCountry } from '../getData/getDataAdmin';
import { handleDataForAutocomplete } from '../Function_Admin';
import { useSession } from 'next-auth/react';

export default function VisaTable() {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([])
    const [loading, setLoading] = useState(true);
    const [listCurrency, setListCurrency] = useState([]);
    const [listCountry, setListCountry] = useState([])
    const [listTypeVisa, setListTypeVisa] = useState([]);
    const { data: session, status } = useSession()
    async function getAllData() {
    try {
      setLoading(false)
      const resp = await getDataCurrency();
      handleDataForAutocomplete(resp)
      setListCurrency(resp);
      const resp2 = await getAllTypeVisa();
      handleDataForAutocomplete(resp2)
      setListTypeVisa(resp2);
      const dataCountries = await getAllCountry();
      handleDataForAutocomplete(dataCountries);
      setListCountry(dataCountries);
      } catch (error) {
        throw error;
      }
    }

    useEffect(() => {
      getAllData();
      setData(rows)
    }, []);

    useEffect(() => {
      console.log("status", status);
      console.log("session", session);
    },[status])

    const handleSelectRow = (list) => {
      let listrowSelected = [];
      list.map((item, index) => {
        const rowSelected = data.find((item) => item.id == list[index])
        listrowSelected.push(rowSelected)
      })
      
      setSelectedRow(listrowSelected);
    }

    const onAdd = async (newData) => {
      // const response = await fetch('http://localhost:3000/api/visas', {
      //   method: "POST",
      //   mode: "cors",
      //   cache: "no-cache",
      //   credentials: "same-origin",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   redirect: "follow",
      //   referrerPolicy: "no-referrer",
      //   body: JSON.stringify(newData),
      // });
      return;
      const dataCurrent = [...data];
      const checkExisted = dataCurrent.findIndex((item) => item.id === newData.id)
      if(checkExisted == -1) {
        const newDataCurrent = [...dataCurrent, newData];
        setData(newDataCurrent);
      }
      else {
        alert("Visa nay da ton tai")
      }
    }

    const onEdit = (newData) => {
      const dataCurrent = [...data];
      const indexEdit = dataCurrent.findIndex(item => item.id === newData.id);
      if(indexEdit !== -1) {
        dataCurrent[indexEdit] = newData;
        setData(dataCurrent);
      }
    }

    const onDelete = (listData) => {
      const dataCurrent = [...data];
      const newDataCurrent = dataCurrent.filter((element) => !listData.includes(element));
      setData(newDataCurrent)
      
    }

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
      <VisaAdd onAdd={onAdd} listTypeVisa={listTypeVisa} listCurrency={listCurrency} listCountry={listCountry} />
      <VisaEdit onEdit={onEdit} selectedRow={selectedRow} />
      <VisaDetail selectedRow={selectedRow}/>
      <VisaDelete onDelete={onDelete} selectedRow={selectedRow} />  
    </div>
    </>
  );
}