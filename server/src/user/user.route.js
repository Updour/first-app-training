const express = require('express');
const User = require('./user.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const app = express();
const cors = require('cors');
const { secret } = require('./config');
// const VerifyToken = require('./VerifyToken');


//get all user\\\
router.get('/User/', async(req, res, next) => {
    const user = await User.find({})
    .catch((err)=>{
        console.log(err);
        res.json({
            text: 'internal error'
        })
    })
    if(user){
        res.json(
            user
            )
    }
    next();
})

        //get by id\\\\\\                                                                                                                                                                                                                          
        router.get('/User/:id', async(req, res, next) => {
            const ai = req.params.id;
            const user = await User.findOne({_id: ai})
            .catch((err)=>{
                console.log(err);
                res.json({
                    text: 'internal error'
                })
            })
            if(user){
                const token = jwt.sign({ user }, 's4mb4l01@d0');
                res.json({
                    token : token , 
                    user
                })
            }
            next();
        })
        //insert into database
        router.post('/User', async (req, res) => {
            const body = req.body;
            const email = await User.findOne({email: body.email})
            .catch((err) => { 
                console.error(err);
                res.json({
                    text: 'internal error'
                }); 
            });
            if (email) {
                return res.json({
                    text: 'user sudah diinput'
                });
            }
            const result = await User.create({ 
                email: body.email, 
                password: body.password
            }).catch((err) => { 
                console.error(err);
                res.json({
                    text: 'internal error'
                }); 
            });

            res.json(result);
        });

        router.post('/Auth/user', async (req, res) => {
            const body = req.body;
            let user = await User.findOne({ email: body.email }).catch(err => {
                //res.status(500);
                res.json('error database');
            });
                //undefined
                if (user === false || user === null) return res.json({ status : false, message : 'user tidak valid'});
                let isFound = await bcrypt.compare(body.password, user.password).catch(err => {
                //res.status(403);
                res.json('error compare');
            });

                if (! isFound) return res.json({status: false, message: 'user tidak ditemukan'});
                const token = jwt.sign({user}, 's4mb4l01@d0');
                res.json({ status: true, token, user});
            });
        
    //for hapus
    router.delete('/User/:_id', function(req, res) {
        console.log(req.params._id);
        let id = req.params._id;
        console.log(id)
        User.remove({
            _id : id
        }, function(err) {
            if (err)
                res.send(err);
            else
                res.send('Successfully! User has been Deleted.');   
        });
    });
    module.exports = router;


