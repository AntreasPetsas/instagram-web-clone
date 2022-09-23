const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const port = 8000;

app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', async (req, res) => {
    try{
        // const salt = await bcrypt.genSalt(); // uses 10 by default on genSalt()
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // the above in one step

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            "username": req.body.username,
            "password": hashedPassword
        };
        users.push(user);
        res.status(500).send();
    }
    catch(error){
        res.status(404).send();
    }
});

app.post('/users/login', async (req, res) => {
    
    const user = users.find(user => user.username === req.body.username);
    if (user === null)
        res.status(400).send('Cannot find user');
    try{
        if(await bcrypt.compare(req.body.password, user.password))
            res.status(200).send("user successfully log in");
        else
            res.status(500).send("Not allowed");
    }
    catch(error){
        res.status(500).send();
    }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});