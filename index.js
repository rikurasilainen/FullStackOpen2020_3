const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post'))

morgan.token('post', (req, res) => { return JSON.stringify(req.body) })



let persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id: 3,
        name: 'Dan Abramov', 
        number: '12-43-234345'
    },
    {
        id: 4,
        name: 'Mary Poppendick',
        number: '39-23-6423122'
    }
]

app.get('/info', (req, res) => res.send(`<p>Phonebook has info for ${persons.length} people<p><p>${new Date()}</p>`))
app.get('/api/persons', (req, res) => res.json(persons))
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    if (persons.some(person => person.id === id)) {
        persons = persons.filter(person => person.id !== id)
        response.status(204).end()
    } else {
        return response.status(400).json({
            error: "id doesn't exist or was already deleted"
        })
    }
})

const randomId = () => {
    const r = Math.floor(Math.random() * 9999999) + 1
    return r
}

app.post('/api/persons/', (request, response) => {
    const body = request.body

    if (persons.some(person => person.name === (body.name))) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    } else if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }

    const person = {
        id: randomId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})