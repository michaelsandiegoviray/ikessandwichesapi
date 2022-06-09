const { response } = require('express')
const express = require('express')
const { process_params } = require('express/lib/router')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())

const sandwiches = {

    'madison bumgarner': {
        'name': 'madison bumgarner',
        'meat': 'steak',
        'sauce': 'light',
        'cheese': 'pepper-jack',
        'lettuce': 'yes',
        'sauce': 'dirty-sauce',
        'tomato': 'yes',

    },
    'matt cain': {
        'name': 'matt cain',
        'meat': 'beef + slaami',
        'sauce': 'Godfather',
        'cheese': 'Provolone',
        'lettuce': 'yes',
        'sauce': 'dirty-sauce',
        'tomato': 'yes',

    },
    'paul reubens': {
        'name': 'paul reubens',
        'meat': 'Pastrami',
        'sauce': 'french dressing',
        'cheese': 'swiss',
        'lettuce': 'yes',
        'sauce': 'dirty-sauce',
        'tomato': 'yes',

    },
    'hunter pence': {
        'name': 'paul reubens',
        'meat': 'Turkey + Bacon',
        'sauce': 'BBQ Sauce + Honey Mustard',
        'cheese': 'Swiss + Cheddar',
        'lettuce': 'yes',
        'sauce': 'dirty-sauce',
        'tomato': 'yes',

    },
    'Not Valid': {
        'name': 'nope',
        'meat': 'Nope',
        'sauce': 'Nah',
        'cheese': 'Nope',
        'lettuce': 'Nuh uh',
        'sauce': 'Sorry',
        'tomato': 'Not even Tomato',

    },



}



app.get('/', (req, res) => {


    res.sendFile(__dirname + '/index.html')



})


app.get('/api/:sandos', (req, res) => {

    const sandoName = req.params.sandos.toLowerCase()

    sandwiches[sandoName] ? res.json(sandwiches[sandoName]) : res.json(sandwiches['Not Valid'])



})


app.listen(process.env.PORT || PORT, () => {

    console.log(`the server is running on ${PORT}`)


})
