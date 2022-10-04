import { Table } from 'antd';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './TableData.module.css'

const TableData = (props) => {
  const columns = [
    // {
    //   title: 'Date',
    //   dataIndex: 'name',
    //   // sorter: true,
    //   render: (name) => <a className={classes.colll}>
    //     `${name.first} ${name.last}`
    //     <h1>hjhjhjh</h1>
    //   </a>,
    //   width: '20%',
    // },
    {
      title: 'Date',
      // dataIndex: 'cell',
      width: '10%',
      render: (id) => <a className={classes.colll}>
      <Link to={`/dashboard/customer${id.cell}`}>{props.date}</Link>
      {/* {console.log(id)} */}
    </a>
    },
    {
      title: 'Application No',
      dataIndex: 'cell',
      width: '10%',
    },
    {
      title: 'Amount',
      dataIndex: 'gender',
      width: '15%',
    },
    {
      title: 'Vendor',
      dataIndex: 'gender',
      width: '20%',
    },
    {
      title: 'Customer',
      dataIndex: 'email',
      width: '20%',

    },
    {
      title: 'Site',
      dataIndex: 'email',
      width: '20%',

    },
  ];

  const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  });

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
   
    
  });




  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        console.log(results)
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200, // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };
  return (
    <div>

{/* {console.log(props)} */}

      <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  )
}

export default TableData
