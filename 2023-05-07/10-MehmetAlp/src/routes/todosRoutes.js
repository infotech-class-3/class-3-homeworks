const express = require('express');


const {create, find, findAll, update, delete} = require("../services/todosService.js");


const router = express.Router();




router.get('/:id', /* (req, res) => {
    res.send(req.params.id);// test etmek icin yazildi
} */ find);//localhost:4000/todos/kayit_id

router.post('/findAll', findAll);// body den bilgi gönderiyoruz, userId ye karlilik todolar getiriliyor
router.post('/create', create);
router.patch('/:id/update', update);
router.delete('/:id/delete', delete);



module.exports = router;