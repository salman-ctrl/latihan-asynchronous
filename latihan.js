const express = require('express');
const app = express();

const authorize = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token || token !== 'valid-token') {
        return res.status(403).send('Forbidden');
    }
    next();
};

app.use('/api/secure', authorize, (req, re\s) => {
    res.send('This is a secure endpoint');
});

const express = require('express');
console.log('server has come')

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

