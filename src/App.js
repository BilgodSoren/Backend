import React, { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [returnedData, setReturnedData] = useState({});
  const [employee, setEmployee] = useState({ ID: 0, Name: '', City: '', State: '' });
  const [employees, setEmployees] = useState([]);

  const fetchAllEmployees = async () => {
    const allData = await fetch('/api/employees', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) => res.json());

    setEmployees(allData);
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);



  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);

    if (name === 'ID') {
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)  
      }));
      return;
    }
    setEmployee((prevState )=> ({
      ...prevState,
      [name]: value
    }));
  }

  const getData = async () => {
    console.log(employee);
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: employee.Name,
      })
    })
      .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0] || {});
  }

  const createEmployee = async () => {
    console.log('Creating Employee:', employee);
  
    const newData = await fetch('/quit', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...employee  
      })
    })
      .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0] || {});
    fetchAllEmployees();
  }
  const deleteEmployee = async () => {
    console.log('Delete Employee:', employee);
    const newData = await fetch('/delete', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ID: employee.ID,
      })
    })
      .then(res => res.json());
    // console.log(newData);
    setReturnedData(newData[0] || {});
    fetchAllEmployees();
  }
  const updateEmployee = async () => {
    const updatedData = await fetch('/update', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(employee)
    })
      .then(res => res.json());
    console.log(updatedData);
    setReturnedData(updatedData[0] || {});
  }
  return (
    <div className="main">
        <div className="in">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.ID}>
                  <td>{employee.ID}</td>
                  <td>{employee.NAME}</td>
                  <td>{employee.CITY}</td>
                  <td>{employee.STATE}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="App2">
        <input type="number" name="ID" placeholder="ID" onChange={setInput}></input>
          <input type="text" name="Name" placeholder="Name" onChange={setInput}></input>
          <input type="text" name="City" placeholder="City" onChange={setInput}></input>
          <input type="text" name="State" placeholder="State" onChange={setInput}></input>
          <br></br>

          <button onClick={getData}>Get Employee Data</button>
          <p className='p'> For Getting Data- Enter name only </p>
          <button onClick={createEmployee}>Create Employee</button>
          <p className='p'> For Creating Data- Fill all Inputs </p>
          <button onClick={deleteEmployee}>Delete Employee</button>
          <p className='p'> For Deleting Data- Enter ID </p>
          <button onClick={updateEmployee}>Update Employee</button>
          <p className='p'>For Updating Data- Enter exixting ID and  Fill all inputs</p>
        </div>
    </div>
  );
}

export default App;