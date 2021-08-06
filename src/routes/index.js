const express = require('express');
const router = express.Router();

// call model
const Task = require('../models/task')

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    // console.log(tasks);
    res.render('index', { 
        // tasks: tasks 
        tasks 
    });
});

router.post('/add', async (req, res) => {

    //recibimos el dato por html y vamos a almacenar
    const task = new Task(req.body);
    await task.save();
    // console.log(new Task(req.body));
    // console.log(req.body);
    // res.send('Recibido');
    res.redirect('/');
});

module.exports = router;