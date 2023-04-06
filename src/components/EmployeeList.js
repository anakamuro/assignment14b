import "./styles.css";
import {useState} from "react"
import DataTable from "react-data-table-component";
import data from './data.json';

export default function EmployeeList() {
 // const [pageSize, setPageSize] = useState(5)
  
  const columns = [
    {
      name: 'First Name',
      selector: row => row.firstName, 
      sortable: true
    }, 
    {
      name: 'Last Name',
      selector: row => row.lastName, 
      sortable: true
    }, 
    {
      name: 'Start Date',
      selector: row => row.startDate, 
      sortable: true
    }, 
    {
      name: 'Department',
      selector: row => row.department, 
      sortable: true
    }, 
    {
      name: 'Date of Birth',
      selector: row => row.dateOfBirth, 
      sortable: true
    }, 
    {
      name: 'Street',
      selector: row => row.street, 
      sortable: true
    },   {
      name: 'City',
      selector: row => row.city, 
      sortable: true
    },   {
      name: 'State',
      selector: row => row.state, 
      sortable: true
    }, 
    {
      name: 'Zip Code',
      selector: row => row.zipCode, 
      sortable: true
    }, 
  ]
  const [records, setRecords] = useState(data);

  function handleFilter(event){
    const newData = data.filter(row => {
      return row.firstName?.toLowerCase().includes(event.target.value?.toLowerCase())
    })
    setRecords(newData)
  }
  return (
    <div className="container mt-5">
      <div id="employee-div" className="container">
            <h3>Current Employees</h3>
            <div className="text-end"><input type="text" onChange={handleFilter}/></div>
            <DataTable
               columns={columns}
               data={records}
               selectableRows
               pagination
               ></DataTable>
            
            <a href="/">Home</a>
        </div>
    </div>
  );
}