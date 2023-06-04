const express = require('express');


const {create} = require("../services/todosService.js");


const router = express.Router();




router.get('/:id', (req, res) => {
    res.send(req.params.id);// test etmek icin yazildi
});//localhost:4000/todos/kayit_id

router.get('/findAll');
router.post('/create', create);
router.patch('/:id/update');
router.delete('/:id/delete');



module.exports = router;