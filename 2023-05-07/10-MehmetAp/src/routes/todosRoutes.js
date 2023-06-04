const express = require('express');
const auth = require("../middlewares/auth.js");


const {create, find, findAll, update, remove} = require("../services/todosService.js");



const router = express.Router();




router.get('/:id', /* (req, res) => {
    res.send(req.params.id);// test etmek icin yazildi
} */ find);//localhost:4000/todos/kayit_id

router.post('/findAll', findAll);// body den bilgi gönderiyoruz, userId ye karlilik todolar getiriliyor
router.post('/create', create);
router.patch('/:id/update', update);
router.delete('/:id/delete', auth, remove);



module.exports = router;