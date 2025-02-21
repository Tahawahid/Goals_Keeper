import asyncHandler from 'express-async-handler';

const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Get goals' });
});

const setGoals = asyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please enter a goal')
    }    
    res.status(200).json({ message: 'Set goals' });
});

const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` });
});

const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}` });
});

export { getGoals, setGoals, updateGoal, deleteGoal };