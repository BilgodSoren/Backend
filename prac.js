const express = require('express');
const cors = require('cors');
const app = express();
// Enable CORS for all origins 
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(3001, () => {
    console.log('Server running on port 3000');
});


const corsOptions = { 
    origin: 'https://www.pexels.com', // Allow only this origin 
    methods: ['GET', 'POST'],     
    }; 
    app.use(cors(corsOptions)); 