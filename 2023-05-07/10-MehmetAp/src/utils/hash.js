const bcrypt = require('bcrypt');

const hash = (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err,hash) => {
        if(err) throw err;
        pass = hash;
    });
}

module.exports = hash;