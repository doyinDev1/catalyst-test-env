import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import classes from './RequestData.module.css'
// eslint-disable-next-line no-unused-vars
import { LeftOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import * as data from '../../../data'
import { ReactComponent as Warning } from '../../../assets/images/warning.svg'
import { ReactComponent as TickIcon } from '../../../assets/images/tick-circle.svg'
import { ReactComponent as CancelIcon } from '../../../assets/images/close-circle.svg'

import { ReactComponent as DocIcon } from '../../../assets/images/DOCX.svg'
import bank from '../../../assets/images/bank.png'
import bank2 from '../../../assets/images/bank2.jpg'



const RequestData = () => {
  const { id } = useParams();

  const navigate = useNavigate()
  const goBack = () => {
    navigate("/dashboard")
  }
  const customer = data.customerDetails
  return (
    <div className={classes.requestData}>
      <div className={classes.requestDataGrid}>

        <div className={classes.requestDataGridChild}>
          <LeftOutlined onClick={goBack} />
          <h1>Request Details</h1>
          <button className={classes.Approved}>Approved</button>
          {/* RENDER BUTTON DYNAMICALLY BASED ON API  */}
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

              <h1>Customer Credit Score</h1>
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
      <div className={classes.requestDataGrid}>
        <h1 className={classes.customerdetails}>Customer Details</h1>

      </div>

      <div className={classes.requestDataGrid}>
        <div className={classes.requestCustomerDetails}>

          <div className={classes.requestCustomerHeader}>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Name</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.name}</h1>
              <h1 className={classes.requestCustomerHeaderChild}>Address</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.name}</h1>

            </div>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Email</h1>
              <h1 className={`${classes.requestCustomerHeaderChild} ${classes.linked}`}>{customer.email}</h1>
              <h1 className={classes.requestCustomerHeaderChild}>Local Government of Residence</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.LGA}</h1>
            </div>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Phone Number</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.phone}</h1>
              <h1 className={classes.requestCustomerHeaderChild}>State of Residence</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.stateOfOrign}</h1>
            </div>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Credit Score</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                <button className={classes.customerClass}>E</button>

              </h1>
              <h1 className={classes.requestCustomerHeaderChild}>State of Original</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.stateOfOrign}</h1>
            </div>
            <div className={classes.Dash}>

              <div className={classes.Line}>
                <hr className={classes.dashline} />

              </div>
            </div>

            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Date of Birth</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.dateOfBirth}
              </h1>
              <h1 className={classes.requestCustomerHeaderChild}>Marital Status</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.maritalStatus}</h1>
            </div>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Gender</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.gender}

              </h1>
              <h1 className={classes.requestCustomerHeaderChild}>Number of Dependents</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.noOfDependents}</h1>
            </div>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Religion</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.religion}

              </h1>
              {/* <h1 className={classes.requestCustomerHeaderChild}>State of Original</h1> */}
              {/* <h1 className={classes.requestCustomerHeaderChild}>{customer.stateOfOrign}</h1> */}
            </div>
            <div className={classes.Dash}>

              <div className={classes.Line}>
                <hr className={classes.dashline} />

              </div>
            </div>


            <div className={`${classes.requestCustomerHeaderContent} ${classes.tax}`}>
              <h1 className={classes.requestCustomerHeaderChild}>ID Type</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.IDType}

              </h1>
              <h1 className={classes.requestCustomerHeaderChild}>ID Number</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.idNumber}</h1>
            </div>

          </div>

        </div>

      </div>



      <div className={classes.requestDataGrid}>
        <div className={classes.requestCustomerDetails}>

          <div className={classes.requestCustomerHeader}>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Type of Business</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.name}

              </h1>
              <h1 className={classes.requestCustomerHeaderChild}>Business Address</h1>
              <h1 className={classes.requestCustomerHeaderChild}> {customer.name}</h1>
            </div>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Years in Business</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.nameofBiz}

              </h1>
              <h1 className={classes.requestCustomerHeaderChild}>Monthly Income</h1>
              <h1 className={classes.requestCustomerHeaderChild}> {customer.nameofBiz}</h1>
            </div>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Business Residence</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.name}

              </h1>
              {/* <h1 className={classes.requestCustomerHeaderChild}>State of Original</h1> */}
              {/* <h1 className={classes.requestCustomerHeaderChild}>{customer.stateOfOrign}</h1> */}
            </div>
          </div>
        </div>
      </div>


      <div className={classes.requestDataGrid}>
        <div className={classes.OutLine}>
          <hr className={classes.dashline} />
        </div>
      </div>

      {/* LOADING COMPONENT */}
      <div className={classes.Loading}>
        <div className={classes.loadcontent}>
          <Warning />
          <h1>
            Please wait while we obtain customers credit history. This will take a few minutes
          </h1>
        </div>
      </div>
      {/* CREDIT CHECK BUTTON */}
      {/* <div className={classes.requestDataGrid}>

        <button
          className={classes.creditCheck}
        >Credit Check</button>

      </div> */}

      {/* VIEW RESULT BUTTON */}
      {/* <div
        className={classes.viewCreditMain}
      >

        <div className={classes.requestDataGrid} >

          <button
            className={classes.viewCredit}
          >View Result</button>
          <div
            className={classes.viewCreditIcons}
          >
            <TickIcon />

            <CancelIcon />
          </div>

        </div>
      </div> */}
      {/* APPROVED CHECK */}
      {/* <div className={classes.requestDataGrid}>
        <div className={classes.approveDiv}>

          <button
            className={classes.requestbuttonApprove}
          > <CheckCircleOutlined /> Approved</button>
        </div>

      </div> */}

      {/* DECLINED CHECK */}
      {/* <div className={classes.requestDataGrid}>
        <div className={classes.approveDiv}>

          <button
            className={classes.requestbuttonDeclined}
          > <CloseCircleOutlined /> Declined</button>
        </div>

      </div> */}

      {/* Guarantor Details Div */}



      <div className={classes.requestDataGrid}>
        <h1 className={classes.customerdetail}>Guarantor Details</h1>
        <h1 className={classes.customerdetail}>Invoice</h1>

      </div>


      <div className={classes.requestDataGrid}>
        <div className={classes.guarantorMain}>

          <div
            className={classes.guarantorDiv}
          >
            <div
              className={classes.guarantorDivLeft}
            >
              <div
                className={classes.guarantorDivText}

              >
                <div className={classes.guarantorDivTextGrid}>

                  <h1 className={classes.guarantorDivTextChild}>Name</h1>
                  <h1 className={classes.guarantorDivTextChild}>Onyeka Onwenu</h1>
                </div>
              </div>
              <div
                className={classes.guarantorDivText}

              >
                <div className={classes.guarantorDivTextGrid}>

                  <h1 className={classes.guarantorDivTextChild}>Email</h1>
                  <h1 className={`${classes.guarantorDivTextChild} ${classes.linked}`}>Onyeka.Onwenu@gmail.com</h1>
                </div>
              </div>
              <div
                className={classes.guarantorDivText}

              >
                <div className={classes.guarantorDivTextGrid}>

                  <h1 className={classes.guarantorDivTextChild}>Phone Number</h1>
                  <h1 className={classes.guarantorDivTextChild}>08102471224</h1>
                </div>
              </div>
            </div>

          </div>
          <div
            className={classes.guarantorDiv}
          >
            <div
              className={classes.guarantorDivRight}
            >
              <div
                className={classes.guarantorInvoice}

              >
               

                <DocIcon
                  className={classes.guarantorInvChild}
                />
                <h1 className={classes.guarantorInvChild}
                >IMG 2332.jpg</h1>
                <button className={classes.guarantorInvChild}
                >View</button>
              </div>
            </div>

          </div>
        </div>
      </div>






      {/* VENDOR DETAILS */}

      <div className={classes.requestDataGrid}>
        <h1 className={classes.customerdetails}>Vendor Details</h1>

      </div>

      <div className={classes.requestDataGrid}>
        <div className={classes.requestCustomerDetails}>

          <div className={classes.requestCustomerHeader}>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Vendor Name</h1>
              <h1 className={classes.requestCustomerHeaderChild}>{customer.name}</h1>
              <h1 className={classes.requestCustomerHeaderChild}>Address</h1>
              <h1 className={classes.requestCustomerHeaderChild}>**************</h1>

            </div>

            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Bank Name</h1>
              <h1 className={classes.requestCustomerHeaderChild}>Guarantee Trust Bank  <span> <img className={classes.bankImg} src={bank} alt="bank icon" /></span></h1>
              <h1 className={classes.requestCustomerHeaderChild}>Account Number</h1>
              <h1 className={classes.requestCustomerHeaderChild}>0145678893</h1>
            </div>



            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Business Name</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.dateOfBirth}
              </h1>
              <h1 className={classes.requestCustomerHeaderChild}>Account Name</h1>
              <h1 className={classes.requestCustomerHeaderChild}>Ogundipe Oyebanji</h1>
            </div>
            <div className={classes.requestCustomerHeaderContent}>
              <h1 className={classes.requestCustomerHeaderChild}>Phone Number 1</h1>
              <h1 className={classes.requestCustomerHeaderChild}>
                {customer.gender}

              </h1>
              <h1 className={classes.requestCustomerHeaderChild}>Phone Number 2</h1>
              <h1 className={classes.requestCustomerHeaderChild}>08098765562</h1>
            </div>



          </div>

        </div>

      </div>

      {/* APPROVE VENDOR APPLICATION */}

      <div className={classes.requestDataGrid}>
        <div className={classes.OutLine}>
          <hr className={classes.dashline} />
        </div>
      </div>

      <div
        className={`${classes.viewCreditMain} ${classes.bottomPad}`}
      >

        <div className={classes.requestDataGrid} >


          <div
            className={classes.viewCreditIcons}
            // MAKE DIV GREY IF GUARANTOR HAVENT' BEEN APPROVED
            data-status={"lock"}
          >
            <TickIcon />

            <CancelIcon />
          </div>

        </div>
      </div>



      {/* APPROVED CHECK */}
      {/* <div className={classes.requestDataGrid}>
        <div className={classes.approveDiv}>

          <button
            className={classes.requestbuttonApprove}
          > <CheckCircleOutlined /> Approved</button>
        </div>

      </div> */}

      {/* DECLINED CHECK */}
      {/* <div className={classes.requestDataGrid}>
        <div className={classes.approveDiv}>

          <button
            className={classes.requestbuttonDeclined}
          > <CloseCircleOutlined /> Declined</button>
        </div>

      </div> */}

    </div>
  )
}

export default RequestData
