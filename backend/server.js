const express  = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.listen(8080, () => {
<<<<<<< HEAD
    console.log('Server is running on port 11230');
=======
    console.log('Server is running on port 8080');
>>>>>>> 1eaad8088c9495477c3a7cfb534da0c191d28611
});
