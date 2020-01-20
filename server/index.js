const express = require('express')
const cors = require('cors')
const peopleCtrl = require('./controllers/peopleCtrl')
const app = express();
app.use(cors())
app.use(express.json())

app.get(`/api/people`, peopleCtrl.getPeople)
app.post('/api/people', peopleCtrl.addFriend)
app.put(`/api/people/:id`, peopleCtrl.editFriend)
app.delete(`/api/people/:id`, peopleCtrl.deleteFriend)
let port = 4000
app.listen(port, () => console.log(`listening on port ${port}`))