const Users = require("../models/Users.js");
const jwt =require('jsonwebtoken');


// router'lardaki CBfunctionlar ayri tanimlanarak sadelestirme islemi okunakligin arttirilmasi
const register = async (req, res) => {
    const user = ({username, password, name, surname} = req.body);
// res.send(user); istegimizin alinmasinin dogrulanmasi
try {
    const data = await Users.create(user);
    res.status(200).json(data);
} catch (error) {
res.status(400).json({mesaage: "User could not created"});
}
}

const login = async (req,res) => {
    const {username, password} = req.body;
    const data = await Users.findOne({username}).exec();
    if (!data) {
        return res.status(404).json({message: "User cannot be found..."})
    }

    const isValidate = await data.dogrulanacakPassword(password);
    if (!isValidate) {
        return res.status(403).json({message: "The passwors is false"})

    }
        // res.data icindeki bilgiler yerine istedigimiz verileri user'a göstermek icin;
        const user = {
            id : data._id,
            username : data.username,
            name : data.name,
            surname : data.surname
        }

     // jwt islemi-------------
     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN); 
    //--------------------------

        res.status(200).json({ ...user, token: accessToken});
    // 1234 = $2b$10$4VXJVnrGv7WwXhZqT72qs..2X3ByD2.uZEAl26XrgtNHXjZtcn.wm
}

// find router icin CBfunction yazimi 
const find = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Users.findOne({_id:id}).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({meassage: "User bulunamadi..."})
    }
}

// findAll router icin CBfunction yazimi 
const findAll = async (req, res) => {
    
    try {
        const data = await Users.find().limit(3).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({meassage: "User bulunamadi..."})
    }
}

// güncelleme yapmak icin update function'in yazilmasi

const update = async (req, res) => {
        const user = ({id, username, name, surname} = req.body);
        try {
            const data = await Users.updateOne({_id : user.id}, { $set : user}).exec();
            res.status(200).json(data);
        } catch (error) {
            
                 res.status(400).json({message : "User cannot be updated..."});
            }
}


// silme islemi icin remove functionunun yazilmasi
const remove = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Users.deleteOne({_id : id}).exec();
        res.status(200).json(data);
    } catch (error) {
       
            return res.status(400).json({message : "User cannot be deleted..."});
        }
}

module.exports = {
    register,
    login,
    find,
    findAll,
    update,
    remove
}