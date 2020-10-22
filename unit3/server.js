const express = require('express')
const cors = require('cors')
const uuid = require('uuid').v4

const app = express()
app.use(express.json())
app.use(cors())

const items =[
        {item_id: uuid(), item_name: '2TB External Hard Drive', item_description:'USB 3.0 and paired with software and password protection.', category: 'Electronical', rate: 45, img_url: 'https://static.rcwilley.com/products/111130476/Blue-Toshiba-Canvio-Advance-1TB-External-Hard-Drive-rcwilley-image1~400.jpg'},
        {item_id: uuid(), item_name: 'HP Projector', item_description: 'High-contrast optical engine with 1080p screen resolution.', category: 'Entertainment', rate: 55, img_url: 'https://i.ebayimg.com/images/g/fMsAAOSw~xFZjzZZ/s-l400.jpg'},
        {item_id: uuid(), item_name: 'Desktop Computer', item_description:'Available with Windows 10 Pro with 4GB of ram included.', category: 'Productivity', rate: 60, img_url: 'https://i.pinimg.com/474x/cd/7b/62/cd7b62cc4a7996a8bbf2a0d335d29005.jpg'},
        {item_id: uuid(), item_name: 'Speaker', item_description:'Bass heavy sound and water-resistant up to 5 meters', category: 'Music', rate: 15, img_url: 'https://audioengineusa.com/wp-content/uploads/2018/02/black1-1-400x400.png'},
        {item_id: uuid(), item_name: 'Blu Ray Player', item_description: 'Play any region DVD from anywhere in the world on any TV!', category: 'Entertainment', rate: 25, img_url: 'https://imgres.tailbase.com/rzdimg/prods/800/91730_1.jpg'},
        {item_id: uuid(), item_name: 'Wireless Headphones', item_description: 'Noise-canceling sound and adjustable controls via touch .', category: 'Music', rate: 20, img_url: 'https://cdn.shopify.com/s/files/1/1490/5112/products/3301897-1_400x.png?v=1580400622'},
        {item_id: uuid(), item_name: 'VR Camera', item_description:'360° view with 4K image rendering and out-of-body experience.', category: 'Photography', rate: 40, img_url: 'https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2018/06/06/source-img/20180606140739_64447.jpg_400x400.jpg'},
        {item_id: uuid(), item_name: 'Microphone', item_description: 'Perfect for podcasting, voiceovers, interviews, and conference calls.', category: 'Music', rate: 35, img_url: 'https://target.scene7.com/is/image/Target/GUEST_8449945b-7cb3-41b0-895f-d512263dee19'},
        {item_id: uuid(), item_name: "Expensive Wide-Angle Camara", item_description: "An expensive camara that produces high quality photos.", category: "Photography", rate: 30, img_url: "https://as.com/betech/imagenes/2018/02/27/portada/1519755076_817147_1519762876_noticia_normal.jpg"},
        { item_id: uuid(), item_name: "Surface Laptop", item_description: "An lightweight laptop made to use on the go for light tasks.", category: "Productivity", rate: 50, img_url: 'https://images-na.ssl-images-amazon.com/images/I/71sW0%2BvlWHL._AC_SX679_.jpg'},
        { item_id: uuid(), item_name: "Portable Battery", item_description: "It is powerful enough to charge your device up to 22 times!", category:'Electronical', rate:20,  img_url: "https://images-na.ssl-images-amazon.com/images/I/51dZ0JGXJIL._AC_SX679_.jpg"}
      ]




function getAllItems(req, res) {
  res.json(items)
}

function getItemById(req, res) {
  res.json(items.filter(item => item.id === req.params.id))
}

function postNewItem(req, res) {
  const newItem = { id: uuid(), ...req.body }
  items.push(newItem)
  res.json(newItem)
}

function deleteItemById(req, res) {
  items = items.filter(item => item.id !== req.params.id)
  res.json(req.params.id)
}

function replaceItemById(req, res) {
  const { id } = req.params
  const updatedItem = { id, ...req.body }
  items = items.map(q => {
    if (q.id === id) {
      return updatedItem
    }
    return q
  })
  res.json(updatedItem)
}

////////////// ENDPOINTS //////////////
////////////// ENDPOINTS //////////////
////////////// ENDPOINTS //////////////
app.get('/api/items', getAllItems)
app.get('/api/items/:id', getItemById)
app.post('/api/items', postNewItem)
app.delete('/api/items/:id', deleteItemById)
app.put('/api/items/:id', replaceItemById)

app.listen(666, () => console.log(
  'The greatest API of all time is listening on port 666!',
))



