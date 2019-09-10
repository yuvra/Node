const expres = require("express");
const router = expres.Router();


router.get('/data', (req,res) => {
    res.send({type: 'GET'});
});

router.post('/data', (req,res) => {
    console.log(req.body); 
    res.send( 
        [
            { type: 'POST' }, 
            { data: req.body } 
        ]
    );
});

router.put('/data/:id', (req,res) => {
    res.send({ type: 'PUT'});
});

router.delete('/data/:id', (req,res) => {
    res.send({ type: 'DELETE'});
});

module.exports = router;