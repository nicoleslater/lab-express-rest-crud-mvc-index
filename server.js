const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
