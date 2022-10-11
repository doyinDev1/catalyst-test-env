import React, { useState } from 'react'
import classes from './Request.module.css'
import { Input, Select, Tabs } from 'antd';
import { SearchOutlined, CalendarFilled } from '@ant-design/icons';
import { today, getMonths, getSevenDays } from '../../../helpers/getDaysMonth'
import { ReactComponent as YellowEllipse } from '../../../assets/images/Ellipse 228.svg'
import { ReactComponent as GreenEllipse } from '../../../assets/images/Ellipse 229.svg'
import { ReactComponent as RedEllipse } from '../../../assets/images/Ellipse 230.svg'
import TableData from '../TableData/TableData';
// eslint-disable-next-line no-unused-vars
import TableDataNew from '../TableDataNew/TableDataNew';

const Request = () => {
    const { Option } = Select;
    const [text, setText] = useState('');
    // day function
    const getToday = today().toString().substring(4, 11)
    // function to get days/ month
    const [date, setDate] = useState(getSevenDays(7).toString().substring(4, 11))
    // returns days & month difference 
    const handleSelectChange = (value) => {
        const timeDifference = getMonths(value)
        const exactDate = timeDifference.toString().substring(4, 11)
        setDate(exactDate)
    };

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <div className={classes.request}>
                <div className={classes.RequestTop}>
                    <div className={classes.RequestTopSub}>
                        <div className={classes.RequestTopHead}>
                            <h1 >Your Requests</h1>
                        </div>
                        <div className={classes.RequestTopHead}>
                            <Input
                                onChange={(e) => setText(e.currentTarget.value)}
                                size="large" placeholder="Search Customer, Order No" prefix={<SearchOutlined />} />
                        </div>
                        <div className={classes.RequestTopHead}>
                            <div className={classes.RequestDateSelect}>
                                <div>
                                    <Select
                                        defaultValue="Last 7 Days"
                                        bordered={false}
                                        onChange={handleSelectChange}
                                    >
                                        <Option value="7">Last 7 Days</Option>
                                        <Option value="1">Last 30 Days</Option>
                                        <Option value="2">Last 60 Days</Option>
                                        <Option value="3">Last 90 Days</Option>
                                        <Option value="6">Last 180 Days</Option>
                                        <Option value="12">Last 360 days</Option>
                                    </Select>
                                </div>
                                <div className={classes.RequestSelect}>
                                    <div className={classes.RequestDate} >
                                        <CalendarFilled />
                                        <p>{date} - {getToday}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.requestBottom}>
                <div className={classes.requestBottomTab}>

                    <Tabs
                        defaultActiveKey="1"
                        onChange={onChange}
                        size={'large'}

                        items={[
                            {
                                label: (
                                    <span className={classes.tabIcons}>
                                        Recent
                                    </span>
                                ),
                                key: '1',
                                children: <TableData date={date} text={text} />,
                            },
                            {
                                label: (
                                    <span className={classes.tabIcons}>
                                        < GreenEllipse />
                                        Approved
                                    </span>
                                ),
                                key: '2',
                                // children: <TableDataNew />,
                                children: <TableData date={date} text={text} />,
                            },
                            {
                                label:
                                    (
                                        <span className={classes.tabIcons}>
                                            < YellowEllipse />
                                            Pending
                                        </span>
                                    ),
                                key: '3',
                                // children: `Content of Tab Pane 3`,
                                children: <TableData date={date}  text={text}/>,
                            },
                            {
                                label:
                                    (
                                        <span className={classes.tabIcons}>
                                            < RedEllipse />
                                            Rejected
                                        </span>
                                    ),
                                key: '4',
                                // children: `Content of Tab Pane 4`,
                                children: <TableData date={date} />,
                            },
                        ]}
                    />
                </div>
            </div>
        </>

    )
}

export default Request
