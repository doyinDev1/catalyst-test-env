import React from 'react'
import classes from './Dashboard.module.css'
import { ReactComponent as DashboardMenu } from '../../assets/images/dashboardMenu.svg'
import { ReactComponent as GreenBox } from '../../assets/images/box-add.svg'
import { ReactComponent as CustomerBox } from '../../assets/images/profile-user.svg'
import { ReactComponent as CreditBox } from '../../assets/images/moneys.svg'
import Request from '../Dashboard/Requests/Request'
// import { Space, Spin } from 'antd';

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <div className={classes.dashboardGrid}>
                <div className={classes.dashboardTitle}>
                    <DashboardMenu />
                    <h1>Admin Dashboard</h1>
                </div>
            </div>
            <div className={classes.dashboardGrid}>
                <hr className={classes.dashline} />
            </div>
            <div className={classes.dashboardGrid}>
                <h1 className={classes.dashboardPerformance}>Your Performance</h1>
            </div>
            <div className={classes.dashboardGrid}>
                <div className={classes.performanceStats}>
                    <div className={classes.dashboardPerfomance}>
                        <div className={classes.performanceText}>
                            <h1>Applications</h1>
                            <div className={classes.performanceTextImg}>
                                <p>240</p>
                                < GreenBox />
                            </div>
                        </div>
                        <div className={classes.performanceText}>
                            <h1>Customers</h1>
                            <div className={classes.performanceTextImg}>
                                <p>54</p>
                                < CustomerBox />
                            </div>
                        </div>
                        <div className={classes.performanceText}>
                            <h1>Total Credits Disbursed</h1>
                            <div className={classes.performanceTextImg}>
                                <p>N2,400</p>
                                <CreditBox />
                            </div>
                        </div>
                        <div className={classes.performanceText}>
                            <h1>Approved Requests</h1>
                            <div className={classes.performanceTextImg}>
                                <p>240</p>
                                < GreenBox />
                            </div>
                        </div>
                        <div className={classes.performanceText}>
                            <h1>Pending  Requests</h1>
                            <div className={classes.performanceTextImg}>
                                
                                <p>240</p>
                                < GreenBox />
                            </div>
                        </div>
                        <div className={classes.performanceText}>
                            <h1>Rejected Requests</h1>
                            <div className={classes.performanceTextImg}>
                                <p>240</p>
                                < GreenBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Request /> */}
        </div>
    )
}

export default Dashboard
