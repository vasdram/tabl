import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Table } from './Table/table';
import { useEffect } from 'react';

export const Upload = () => {
  const [file, setFile] = useState(null);
  const [table, setTable] = useState([]);

  const changeHandler = (e) => {
    setFile(e.currentTarget.files[0]);  
  };

  const submitHandler = (e) => {
    //e.preventDefault();
    const formData = new FormData();
    formData.append('file', file, file.name);

    axios.post('http://localhost:3300/api/v1/upload', formData).then((res) => {
      setTable(res.data);
    });
  };

  return (
    <>
      <div className='input-group mt-5'>
        <div className='custom-file'>
          <input
            type='file'
            name='upload'
            onChange={changeHandler}
            className='custom-file-input'
            id='inputGroupFile04'
            aria-describedby='inputGroupFileAddon04'
          />
          <label className='custom-file-label' for='inputGroupFile04'>
                {!!file ? file.name : "Choose file"}
          </label>
        </div>
        <div className='input-group-append'>
          <button
            className='btn btn-outline-secondary'
            onClick={submitHandler}
            type='button'
            id='inputGroupFileAddon04'
          >
            Upload
          </button>
        </div>
      </div>
      <Table data={table} />
    </>
  );
};
