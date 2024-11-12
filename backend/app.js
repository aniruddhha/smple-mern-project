const express = require('express')
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());

const port = 3000

const toDoItems = [
    {id: 1, item: 'Lunch', status: true},
]

app.get('/todos', (req, res) => {
    res.json(toDoItems);
});


app.post('/todos', (req, res) => {
    const { item, status } = req.body;
    const newId = toDoItems.length ? toDoItems[toDoItems.length - 1].id + 1 : 1;
    const newToDo = { id: newId, item, status: !!status };
    toDoItems.push(newToDo);
    res.status(201).json(newToDo);
});


app.listen(port, () => {
    console.log(`Express Server is`)
} )