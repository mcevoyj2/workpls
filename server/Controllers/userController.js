const userModel = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const registerUser = async (req, res) => {
    res.send("Register");
};

module.exports = {registerUser};