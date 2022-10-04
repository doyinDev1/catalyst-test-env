import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import classes from './RequestData.module.css'
// eslint-disable-next-line no-unused-vars
import { LeftOutlined, CheckCircleOutlined } from '@ant-design/icons'
const RequestData = () => {
  const { id } = useParams();

  const navigate = useNavigate()
  const goBack = () => {
    navigate("/dashboard")
  }
  return (
    <div className={classes.requestData}>
      <div className={classes.requestDataGrid}>

        <div className={classes.requestDataGridChild}>
          <LeftOutlined onClick={goBack} />
          <h1>Request Details</h1>
          <button className={classes.Approved}>Approved</button>
          {/* <button className={classes.Pending}>Pending</button> */}
          {/* <button className={classes.Rejected}>Rejected</button> */}

        </div>
        <hr className={classes.dashline} />
      </div>
      <div className={classes.requestDataGrid}>
        <div className={classes.requestDataHeaderTop}>

          <div className={classes.requestDataHeader}>
            <div className={classes.requestDataHeaderText}>
              <h1>Amount</h1>
              <p>N2,500</p>
            </div>
            <div className={classes.requestDataHeaderText}>
              <h1>Date of Request</h1>
              <div className={classes.requestDataHeaderSpan} >
                <p>N2,500</p>
                <h4>11:55PM</h4>
              </div>
            </div>
            <div className={classes.requestDataHeaderText}>

              <h1>Customer Credit Sore</h1>
              <button className={classes.customerClass}>E</button>
            </div>
            <div className={classes.requestDataHeaderText}>

              <h1>Application No.</h1>
              <p>{id}</p>
            </div>
            <div className={classes.requestDataHeaderText}>

              {/* <button
                className={classes.requestbutton}
              >Approve</button> */}

              <button
                className={classes.requestbuttonActive}
              >Approve</button>

              {/* <button
                className={classes.requestbuttonApprove}
              > <CheckCircleOutlined /> Approved</button> */}
            </div>
          </div>
        </div>
      </div>
      asasa

    </div>
  )
}

export default RequestData
