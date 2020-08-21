import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Table } from './table';


export const Upload = () => {
    const [file, setFile] = useState(null)
    const [table, setTable] = useState([])
    const changeHandler = (e) => {
        setFile(e.currentTarget.files[0])
    }
    const submitHandler = (e) => {
        //e.preventDefault();
        const formData = new FormData();
       ;

       formData.append( 
        "file", 
        file, 
        file.name 
      ); 
        
    axios.post("http://localhost:3300/api/v1/upload", formData).then(res => {
        setTable(res.data)
    })
       
    }
    return (
        <>
        <div>
        <input type="file"  name="upload" onChange={changeHandler} multiple />
        <button  onClick={submitHandler}>Upload</button>
        </div>
        <Table data={table} />
        </>
    )
}
