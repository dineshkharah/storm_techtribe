const Query = require('../models/Query');


const getAllQueries = async (req, res) => {
    try {
        
        const queries = await Query.find();
        res.status(200).json({ queries });

    } catch (error) {
        
        res.status(404).json({ message: error.message });

    }
}

const updateSingleQuery = async (req, res) => {
    try {
        
        const { id } = req.params;
        const { answer } = req.body;

        const updatedQuery = await Query.findById(id);

        updatedQuery.answer = answer;

        await updatedQuery.save();

        res.json(updatedQuery);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Emp 

const createQuery = async ( req, res) => {
    try {
        
        const { question } = req.body;

        const newQuery = new Query({
            question,
            answer: ''
        });

        await newQuery.save();

        res.status(201).json(newQuery);

    } catch (error) {
        
    }
}

module.exports = { 
    getAllQueries,
    updateSingleQuery,
    createQuery
};