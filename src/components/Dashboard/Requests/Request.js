import React, { useState } from 'react'
import classes from './Request.module.css'
import { Input, Select } from 'antd';
import { SearchOutlined, CalendarFilled } from '@ant-design/icons';
import { today, getMonths, getSevenDays } from '../../../helpers/getDaysMonth'

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


    return (
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
                            <div
                            //  className={classes.RequestDateSelect}
                            >
                                <Select
                                    defaultValue="Last 7 Days"
                                    bordered={false}
                                    // style={{
                                    //     width: 120,
                                    // }}
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
    )
}

export default Request
