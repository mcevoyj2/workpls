const understandingModel = require('../Models/understandingModel');


const createUnderstanding = async(req, res) => {
    const { userId, understandingUser } = req.body;

    const understanding = new understandingModel({
        userId, understandingUser
    });

    try {
       const response = await understanding.save()
       res.status(200).json(response)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const findUnderstanding = async(req, res) => {
    const { userId  } = req.params;
    try {
        const understandings = await understandingModel.find({userId});
        res.status(200).json(understandings)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
}



module.exports = {createUnderstanding, findUnderstanding};