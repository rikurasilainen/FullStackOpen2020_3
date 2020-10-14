const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)

} 
const pw = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://databaseuser:${pw}@cluster0.18hak.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: name,
    number: number
})

if (process.argv.length<4) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
} else {
    person.save().then(result => {
        console.log(`Added ${person.name} number: ${person.number} to phonebook`)
        mongoose.connection.close()
    })
}