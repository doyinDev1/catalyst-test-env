import { Table } from 'antd';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './TableData.module.css'
import { ReactComponent as YellowEllipse } from '../../../assets/images/Ellipse 228.svg'
// import { ReactComponent as GreenEllipse } from '../../../assets/images/Ellipse 229.svg'
// import { ReactComponent as RedEllipse } from '../../../assets/images/Ellipse 230.svg'
const TableData = (props) => {
  const navigate = useNavigate()
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
      title: <h1 className={classes.header}>Date</h1>,
      // dataIndex: 'cell',
      width: '12%',
      render: (id) => <div className={classes.text}>
        <h1>18/02/22</h1>
        <p>10:28 AM</p>
      </div>
    },
    {
      title: <h1 className={classes.header}>Application No</h1>,

      // dataIndex: 'cell',
      render: (id) => <div className={classes.application}>
        <YellowEllipse />
        {/* {console.log(id)} */}
        <h1>{id.phone}</h1>
      </div>,
      width: '17%',
    },
    {
      title: <h1 className={classes.header}>Amount</h1>,
      // dataIndex: 'gender',
      render: (id) => <div className={classes.text}>
        <h1>N3000.00</h1>
      </div>,
      width: '19%',
    },
    {
      title: <h1 className={classes.header}>Vendor</h1>,
      // dataIndex: 'gender',
      render: (id) => <div className={classes.text}>
        <h1>{id.id.name}</h1>
      </div>,
      width: '13%',
    },
    {
      title: <h1 className={classes.header}>Customer</h1>,
      // dataIndex: 'email',
      render: (id) => <div className={classes.customer}>
        <h1>{id.name.first} {id.name.last}</h1>
        <button>E</button>
      </div>,
      width: '19%',

    },
    {
      title: <h1 className={classes.header}>Site</h1>,
      // dataIndex: 'email',
      render: (id) => <div className={classes.text}>
        <h1>Chalenge</h1>
      </div>,
      width: '16%',

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
        // console.log(results)
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
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              // console.log(record, 'hjhhj')
              navigate(`/dashboard/customer${record.phone}`)
            }, 
        
          };
        }}
      />
    </div>
  )
}

export default TableData
