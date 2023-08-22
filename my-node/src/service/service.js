let db = require('../models/index')

let getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const data = await db.User.findAll({ raw :true

            })
            resolve(data)
        }
        catch (e) {
            reject(e)
        }
    })
}


let createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.create({
                name: data.name ,
                email : data.email
            })
            resolve(user)
        
        }
        catch (e) {
           reject(e)  
        }
  

    })
}
let updateUser = (data , dataId) => {
    return new Promise(async(resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where : {id : dataId}
            })
            if (user) {
                user.name = data.name
                user.email= data.email
            }
            user.save();
            resolve(user)
        }
        catch (e) {
           reject(e)
        }
    })
}
let deleteUser = (userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                id : userId
                } 
                
            })
            if (user) {
                user.destroy();
                resolve()
            }
            else {
                resolve()
            }
        }
        catch (e) {
            reject(e)
        }

    })
        
}

module.exports = {
    createUser ,updateUser ,getAllUser,deleteUser
}
