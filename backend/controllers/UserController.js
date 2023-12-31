const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');


const SignUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const salt = await bycrypt.genSalt();
        const passwordHash = await bycrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: passwordHash,
            tasks: [],
            role,
        });

        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const LoginIn = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const isMatch = await bycrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.ACCESS_KEY);
        delete user.password;
        res.setHeader('authorization', token);
        res.setHeader('userid', user._id);
        res.setHeader('role', user.role);
        res.status(200).json({ token, user ,  userId: user._id });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }
}


// Get Users for HR

const getAllUsers = async (req, res) => {
    try {
        
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    SignUp,
    LoginIn,
    getAllUsers
}