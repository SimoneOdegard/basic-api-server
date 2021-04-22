'use strict';

const express = require('express');

const Food = require('../models/food.js');
const food = new Food();

const foodRouter = express.Router();

// RESTful routes

foodRouter.get('/food', getFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood)
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

// RESTful route handlers

function getFood(req, res) {
  let getAllFood = food.read();
  res.status(200).json(getAllFood);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let theFood = food.read(id);
  res.status(200).json(theFood);
}

function createFood(req, res) {
  let content = req.body;
  let createdFood = food.create(content);
  res.status(201).json(createdFood);
}

function updateFood(req, res) {
  const id = parseInt(req.params.id);
  let data = req.body;
  let updatedFood = food.update( id, data );
  res.status(200).json(updatedFood);
}

function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  food.delete( id );
  res.status(200).send('Success! Item deleted.');
}

module.exports = foodRouter;