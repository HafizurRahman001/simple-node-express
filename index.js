const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Im Hafizur Rahman Rigon')
});


// use search query 
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        res.send(searchResult);
    } else {
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
});

app.get('/fruits', (req, res) => {
    res.send(fruits);
});

const fruits = [
    'mango', 'orange', "lichi", 'kathal', 'kola', 'peyara', 'jaam', 'jaamrul'
]

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammi yammi fazli')
});

const users = [
    { id: 0, name: 'Hafiz', age: 23, email: 'hafiz@gmail.com' },
    { id: 1, name: 'Sabana', age: 25, email: 'sabana@gmail.com' },
    { id: 2, name: 'Susmita', age: 28, email: 'susmita@gmail.com' },
    { id: 3, name: 'sumaiya', age: 25, email: 'sumaiya@gmail.com' },
    { id: 4, name: 'srabonti', age: 23, email: 'srabonti@gmail.com' },
    { id: 5, name: 'mamun', age: 25, email: 'mamun@gmail.com' },
    { id: 6, name: 'achia', age: 23, email: 'achia@gmail.com' },
]

app.listen(port, () => {
    console.log('listening to port:', port);
})