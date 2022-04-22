const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())


const users = [
    {
        id: 1, name: 'John', email: 'john@gmail.com'
    },
    {id: 2, name: 'red', email: 'red@gmail.com'},
    {id: 3, name: 'jub', email: 'jub@gmail.com'},
    {id: 4, name: 'nad', email: 'nad@gmail.com'}
];




app.get('/', (req, res) => {
    res.send('hello readul s')
});

app.get('/users', (req, res) => {
    console.log(req.query)
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)

    }else{

        res.send(users)
    }
})
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const findUser = users.find(user => user.id === id);
    res.send(findUser)

})
app.post('/users', (req, res) => {
    const addUser = req.body;
   addUser.id = users.length  + 1;
   users.push(addUser);
   res.send(users);
})
app.listen(port, () => {
    console.log('this is car genius')
});

