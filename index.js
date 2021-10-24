const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello on my second Node,JUST WOW');
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '017888888' },
    { id: 1, name: 'Joshim', email: 'joshim@gmail.com', phone: '017888888' },
    { id: 2, name: 'Manna', email: 'manna@gmail.com', phone: '017888888' },
    { id: 3, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '017888888' },
    { id: 4, name: 'Salmanshah', email: 'Salmanshah@gmail.com', phone: '017888888' },
    { id: 5, name: 'Suchitra', email: 'Sichitra@gmail.com', phone: '017888888' }]


app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

//app . method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango,apple,orange,banana,lemon'])
});

app.get('/fruits/mangoes/fojli', (req, res) => {
    res.send('Yummy yummy tok fojli')
});

app.listen(port, () => {
    console.log('Listening to port', port);
});