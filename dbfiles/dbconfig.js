// const sql = require('mssql');

// const Config = {
//   user: 'Soren', // Your SQL Server username
//   password: 'Asdfghjkl@12', // Your SQL Server password
//   server: 'TRINITY', // Hostname or IP of the SQL Server
//   port: 1433, // Default SQL Server port
//   database: 'BILGOD', // Your database name
//   options: {
//     encrypt: false, // Set to `false` unless you explicitly require encryption (e.g., for Azure)
//     trustServerCertificate: true, // Required if SSL is enabled but you don't have a certificate
//   },
 
// };



// module.exports = {Config}


// dbConfig.js
const sql = require('mssql');

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

// Function to connect to the database
async function connectToDatabase() {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to the database');
        return pool;
    } catch (err) {
        console.error('Database connection failed:', err);
        throw err;
    }
}

module.exports = {
    config,
    connectToDatabase,
};