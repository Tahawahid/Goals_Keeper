import asyncHandler from 'express-async-handler';
import Goal from '../models/goalModel.js';

const getGoals = asyncHandler( async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json(goals);
});

const setGoals = asyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please enter a goal')
    }
    const goal = new Goal({
        text: req.body.text
    });

    const createdGoal = await goal.save();
    res.status(201).json(createdGoal);
});

const updateGoal = asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.deleteOne();
    res.status(200).json({ message: `Delete goals ${req.params.id}` });
});

export { getGoals, setGoals, updateGoal, deleteGoal };