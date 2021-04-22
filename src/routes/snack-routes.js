'use strict';

const express = require('express');

const Snack = require('../models/snack.js');
const snack = new Snack();

const snackRouter = express.Router();

// RESTful routes

snackRouter.get('/snack', getSnack);
snackRouter.get('/snack/:id', getOneSnack);
snackRouter.post('/snack', createSnack)
snackRouter.put('/snack/:id', updateSnack);
snackRouter.delete('/snack/:id', deleteSnack);

// RESTful route handlers

function getSnack(req, res) {
  let getAllSnack = snack.read();
  res.status(200).json(getAllSnack);
}

function getOneSnack(req, res) {
  const id = parseInt(req.params.id);
  let theSnack = snack.read(id);
  res.status(200).json(theSnack);
}

function createSnack(req, res) {
  let content = req.body;
  let createdSnack = snack.create(content);
  res.status(201).json(createdSnack);
}

function updateSnack(req, res) {
  const id = parseInt(req.params.id);
  let data = req.body;
  let updatedSnack = snack.update( id, data );
  res.status(200).json(updatedSnack);
}

function deleteSnack(req, res) {
  const id = parseInt(req.params.id);
  snack.delete( id );
  res.status(200).send('Success! Item deleted.');
}

module.exports = snackRouter;