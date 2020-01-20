let id = 0
const people = require('./MOCK_DATA.json')

module.exports = {

    getPeople: (req, res) => {
        res.status(200).send(people)
    },
    addFriend: (req,res) => {
        console.log('hitfriend')
        let {name,email,number,message} = req.body
        let friendObj = {
            id,
            name,
            number,
            email,
            message
        }
        id++
        people.push(friendObj)
        res.status(200).send(people)

    },
    editFriend: (req,res) => {
        const {id} = req.params;
        const {name,email,message,number} = req.body;
        console.log(req.body)
        const index = people.findIndex(e => e.id === +id);
        people[index].name = name;
        people[index].number = number;
        people[index].email = email;
        people[index].message = message;
        res.status(200).send(people)
    },
    deleteFriend: (req,res) => {
        console.log(req.params)
        const {id} = req.params;
        const index = people.findIndex(e => e.id === +id)
        people.splice(index, 1);
        res.status(200).send(people)
    }
}
