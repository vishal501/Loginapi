import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import {
  
  Avatar,
  Grid,
  
} from '@material-ui/core';

function Home() {
  const useStyles = makeStyles((theme) => ({

    status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
    }
  }));

  const [data, setData] = useState([])
  const columns = [
    { title: "Patient Code", field: "order_id",align:"center",filtering:false, render: (row) => <div style={{fontSize:"2.6vmin"}}>{row.order_id}</div>},
    { title: "Name", field: "customer",align:"center", render: (row) => <div style={{fontSize:"2.6vmin"}}>{row.customer}</div>},
    
    // { title: "country", field: "country" },
    
    // { title: "product_description", field: "product_description" },
    { title: "Date of Birth", field: "date", render: (row) => <div style={{fontSize:"2.4vmin",fontWeight:"500"}}>{row.date}</div> },
    { title: "Mobile No", field: "mobile", render: (row) => <div style={{fontSize:"2.4vmin",fontWeight:"500"}}>9999912345</div> },
  ]
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])
  return (
    <>
      <div className="App">
      
      <h1 align="center">Patient Details</h1>
      <MaterialTable
        title=""
        data={data}
        columns={columns} 
        options={{sorting:true,searchFieldAlignment:"left",searchAutoFocus:true,searchFieldVariant:"outlined",
        headerStyle:{background:"#1111"}}}/>
    </div>
    </>
  );
}

export default Home;