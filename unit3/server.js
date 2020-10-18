const express = require('express')
const cors = require('cors')
const uuid = require('uuid').v4

const app = express()
app.use(express.json())
app.use(cors())

let users = [
  {
    id: uuid(),
    user: 'Matt',
    avatar: "https://ca.slack-edge.com/ESZCHB482-W0177GCQ5B9-f4702c0acb2b-512",
    email: 'matt@matt.matt',
    language: 'Blowing into a Nintendo Cartridge',
    position: 'Idiocy, Slacking Off, and Tomfoolery',
    password: '1234',
    tos: true,
  },
  {
    id: uuid(),
    user: 'Abdi',
    avatar: "https://ca.slack-edge.com/ESZCHB482-W015B04PRDM-73b6ac42199c-512",
    email: 'abdi@abdi.abdi',
    language: 'javacsript',
    position: 'Back-End (Node)',
    password: '1234',
    tos: true,
  },
  {
    id: uuid(),
    user: 'Melissa',
    avatar: "https://ca.slack-edge.com/ESZCHB482-W012JQ0DC11-bcf1dbca9cf3-512",
    email: 'melissa@melissa.melissa',
    language: 'css',
    position: 'React II', 
    password: '1234',
    tos: true,
  },
  {
    id: uuid(),
    user: 'Brennan',
    avatar: "https://ca.slack-edge.com/ESZCHB482-W01AXMF8DEE-e327453ef23d-512",
    email: 'melissa@melissa.melissa',
    language: 'css',
    position: 'UI/UX', 
    password: '1234',
    tos: true,
  },
  {
    id: uuid(),
    user: 'Samantha',
    avatar: "https://ca.slack-edge.com/ESZCHB482-W017NEWMCUT-360e702369f7-512",
    email: 'melissa@melissa.melissa',
    language: 'css',
    position: 'UI/UX', 
    password: '1234',
    tos: true,
  },
  {
    id: uuid(),
    user: 'Ismael',
    avatar: "https://ca.slack-edge.com/ESZCHB482-W01AXMJ2R4J-525ed993b101-512",
    email: 'melissa@melissa.melissa',
    language: 'css',
    position: 'UI/UX', 
    password: '1234',
    tos: true,
  },
]

function getAllUsers(req, res) {
  res.json(users)
}

function getUserById(req, res) {
  res.json(users.filter(user => user.id === req.params.id))
}

function postNewUser(req, res) {
  const newUser = { id: uuid(), ...req.body }
  users.push(newUser)
  res.json(newUser)
}

function deleteUserById(req, res) {
  users = users.filter(user => user.id !== req.params.id)
  res.json(req.params.id)
}

function replaceUserById(req, res) {
  const { id } = req.params
  const updatedUser = { id, ...req.body }
  users = users.map(q => {
    if (q.id === id) {
      return updatedUser
    }
    return q
  })
  res.json(updatedUser)
}

////////////// ENDPOINTS //////////////
////////////// ENDPOINTS //////////////
////////////// ENDPOINTS //////////////
app.get('/api/users', getAllUsers)
app.get('/api/users/:id', getUserById)
app.post('/api/users', postNewUser)
app.delete('/api/users/:id', deleteUserById)
app.put('/api/users/:id', replaceUserById)

app.listen(666, () => console.log(
  'The greatest API of all time is listening on port 666!',
))



