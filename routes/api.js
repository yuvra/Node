const expres = require("express");
const router = expres.Router();
const Profile = require('../models/profile');

router.get('/login', (req,res) => {
    const Auth = {
        token: "mtGDyr3rFW"
    }
    res.send(Auth);
});

router.get('/data', (req,res) => {
    if(req) {
        console.log("************* GET REQ", req.body);
    }
    Profile.find().then((data)=>{
        res.send(data);
    });
    // res.send({type: 'GET'});
});

router.post('/data', (req,res) => {
    
    Profile.create(req.body).then((profile) => { 
        res.send(profile);
    });
});

router.put('/data/:id', (req,res) => {
    Profile.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{
        res.send({ type: 'PUT'});
    })
    
});

router.delete('/data/:id', (req,res) => {
    console.log("Del id",req.params.id); 
    Profile.findByIdAndDelete(({_id:req.params.id})).then((re)=> {
        res.send({ type: re});
    });
    
});

module.exports = router;