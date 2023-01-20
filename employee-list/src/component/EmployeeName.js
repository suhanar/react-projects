import React from 'react';
import Details from './Details';
import EmployeeListItem from './EmployeeListItem';

function EmployeeName() {
  return (
    <div className='employeename'>
        <h1>Employee</h1>
        <div className='employeedetails'>
        <div id='employeelistitem'>
        <EmployeeListItem img={require('../image/user6.png')} name='Ray Moore' position='VP of Sales'/>
        </div>
        <div className='detail-div'>
            <Details call='SMS' num='000-987-8765' />
            <Details call='Call Office' num='654-553-9876' />
            <Details call='Email' num='342-098-9876' />
            <Details call='Call Mobile' num='987-098-9876' />
        </div>
        </div>
    </div>
  )
}

export default EmployeeName