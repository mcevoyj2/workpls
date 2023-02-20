const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;
    return jwt.sign({ _id }, jwtkey, { expiresIn: "20d" })
};


const registerUser = async (req, res) => {
    try {
    const {name, email, password} = req.body;

    let user = await userModel.findOne({ email });

    if(user) return res.status(400).json("User already registered");

    if(!name || !email || !password) 
    return res.status(400).json("Please enter all fields");
    if(!validator.isEmail(email)) 
    return res.status(400).json("Please enter a valid email");
    if(!validator.isStrongPassword(password)) 
    return res.status(400).json("Password must include at least 1 captial, 1 special character and 1 number");

    user = new userModel({
        name,
        email,
        password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = createToken(user._id);

    res.status(200).json({_id: user._id, name, email, token});
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
};

module.exports = {registerUser};