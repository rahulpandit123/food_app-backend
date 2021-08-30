const express = require("express");
const { response } = require('express');
const User = require('../Models/User');
const bcrypt = require('bcrypt');

exports.createUserAccount =async (req,res) => {
    const {firstname, lastname, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const {firstname, lastname, email, password} = req.body;
        // const hashedPassword = await bcrypt.hash(userPassword, 10);
    console.log(req.body)
    console.log("request.Body -> ",req.body);
    console.log("firstname",firstname);
    console.log("Email",email);
    console.log("password",password);

    const newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword
    };

    

    const existingUser = await User.findOne({email: email});

    if(existingUser){
        res.status(401).json({message: `Error!! User with an email id of ${response.email} already exit`});
        return;
    }

   await User.create(newUser);
    res.status(201).json({message: 'User created successfully'})
    
    } catch (error) {
        res.status(500).json({message: error})
    }
    
}

/*
exports.registerUser = async (req, res) => {
    const { firstname, userEmail, lastname, userPassword } = req.body;
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const newUser = new user({
        name: userName,
        email: userEmail,
        phone: userPhone,
        address: userAddress,
        password: hashedPassword
    });
    user.findOne({ email: userEmail })
        .then(response => {
            response != null
                ? res.status(200).json({ message: 'Email already registered. Please login...' })
                : newUser.save()
                    .then(() => {
                        res.status(200).json({ message: 'You have registered successfully. Please login...' })
                    })
                    .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
}
*/
//Login
exports.getUserByLogin = (req,res) => {
    const {email, password} = req.body;

    UserLog = {
        email: email,
        password: password
    }

    User.findOne({email:UserLog.email})    
        .then(response => {
            console.log(response);
            bcrypt.compare(password, response.password)
            .then(res2 =>
                { console.log(res2); 
                    res2 ? 
                    res.status(200).json({message: "Login Succesfull",firstname :response.firstname })
                    : res.status(400).json({message:"wrong Credientials, Please try with correct Password!"}) 
    }).catch(err => console.log(err))
         
        
      }).catch(err => console.log(err))
}
/*
exports.getUserByLogin = async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }).then(response => {
        bcrypt.compare(password, response.password)
        .then(state => {
            state
                ? res.status(200).json({ message: 'You\'ve logged in successfully..', firstname: response.firstname })
                : res.status(400).json({ message: 'Invalid credentials..' });
        }).catch()
    }).catch(error=>console.log(error))
}*/
/*
exports.getUserByLogin = async (req, res) => {
    const { userEmail, userPassword } = req.body;
    User.findOne({ email: userEmail }).then(response => {
        bcrypt.compare(userPassword, response.password).then(state => {
            state
                ? res.status(200).json({ message: 'You\'ve logged in successfully..', userName: response.name })
                : res.status(400).json({ message: 'Invalid credentials..' });
        }).catch()
    }).catch(error=>console.log(error))
}*/