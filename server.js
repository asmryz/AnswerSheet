import express from 'express'
const app = express();
import indexRouter from './api/index.js'

app.use('/', indexRouter);

app.get('/msg', (req, res) => {
    res.json({ msg: 'Hello World' });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})

