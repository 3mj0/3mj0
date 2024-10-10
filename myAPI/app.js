const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Mags API!' });
});

app.get('/api/data', (req, res) => {
    const data = {
        id:1,
        name: 'Maggi Keddy',
        age: 36,
    };
    res.json(data);
});

app.post('/api/data', (req, res) => {
    const newData = req.body;
    res.json({
        message: 'Data recieved successfully',
        data: newData,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});