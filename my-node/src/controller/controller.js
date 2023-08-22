const createUser = require('../service/service')

let getAll = async (req, res) => {
    const data = await createUser.getAllUser();
    return res.json(data)
}

let hello = async (req, res) => {
    const data = await req.body
    await createUser.createUser(data)

    return res.send('quy den roi')
}


let editUser = async (req, res) => {
    const data =  await req.body
    const id = await req.params.id
    await createUser.updateUser(data , id)
    console.log(id)
    return res.send('hhh')
}
let deleteThisUser = async( req ,res ) => {
    const userId = req.params.id 
    createUser.deleteUser(userId)
    return res.send('good')
    
}

module.exports = {
    hello,
    editUser,
    getAll,
    deleteThisUser
}