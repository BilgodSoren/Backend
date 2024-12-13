// dbOperation.js
const sql = require('mssql'); // or require('mysql2') for MySQL

// Database configuration
const config = {
    user: 'Soren', // Replace with your database username
    password: 'Asdfghjkl@12', // Replace with your database password
    server: 'TRINITY', // e.g., 'localhost' or '127.0.0.1'
    port :  1433,
    database: 'BILGOD', // Replace with your database name
    options: {
        encrypt: true, // Use this if you're on Azure
        trustServerCertificate: true, // Change to true for local dev / self-signed certs
    },
};

// Function to get all  Student
const getAllEmployees = async () => {
    try {
      let pool = await sql.connect(config);
      let persons = await pool.request().query("SELECT * FROM Student");
      console.log(persons);
      return persons;
    }
     catch (error) {
      console.error('Error fetching all employees:', error);
    }
  };
  
  const getEmployees = async(Name) => {
      try{
          let pool = await sql.connect(config);
          let persons = await pool.request().query(`SELECT * FROM Student WHERE Name ='${Name}'`);
          console.log(persons);
          return persons;
      }
      catch(error){
          console.log(error);
      }
  }
  
  const createEmployees = async(Students) => {
    try{
        let pool = await sql.connect(config);
        let persons = pool.request()
        .query(`INSERT INTO Student VALUES 
          (${Students.ID},'${Students.Name}','${Students.City}','${Students.State}')
          `);
        return persons;
    }
    catch(error){
        console.log(error);
    }
  }
  
  const deleteEmployees = async(ID) => {
    try{
        let pool = await sql.connect(config);
        let persons = pool.request()
        .query(`DELETE FROM Student WHERE ID ='${ID}'`);
        return persons;
    }
    catch(error){
        console.log(error);
    }
  }
  const updateEmployee = async(Student) => {
    try {
        let pool = await sql.connect(config);
        let persons = await pool.request()
        .query(`UPDATE Student SET Name = '${Student.Name}', City = '${Student.City}', State = '${Student.State}' WHERE ID = ${Student.ID}`);
        return persons;
    }
    catch(error) {
        console.log(error);
    }
  }
  module.exports = {
    createEmployees,
    getAllEmployees,
    deleteEmployees,
    getEmployees,
    updateEmployee
  }