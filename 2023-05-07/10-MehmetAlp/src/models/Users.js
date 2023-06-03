const mongoose =require("mongoose");
const hash = require("../utils/hash.js");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true// grilmesi zorunlu alan
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()// kayit olusturulurken o andaki tarih otomatik olusturulsun
    },
   
});

// password' bcrypt paketi ile hashlenmesi
   /*  const hash = (pass) => {
        return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err,hash) => {
            if(err) throw err;
            pass = hash;
        });
    } */
    
    // password  hashing
    userSchema.pre("save", function(next) {
        if(this.password) {
            this.password = hash(this.password);
        }
        next();
    });

    // password validating -->> login olurken girilen password(data) ile hashlenmis ve veri tabanininfa tutulan password'u(this.password) karsilastirarak dogrulanma islemi
    userSchema.methods.dogrulanacakPassword = function(data) {
        return bcrypt.compare(data, this.password);
    }


const Users = mongoose.model('Users', userSchema);

module.exports = Users;