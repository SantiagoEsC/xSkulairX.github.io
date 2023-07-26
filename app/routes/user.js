const express = require('express');
const controller = require('../controllers/user');

const router = express.Router();
const path = 'user';

// Ruta para obtener datos de usuarios (GET)
router.get(`/${path}`, controller.getData);

// Ruta para insertar datos de usuarios (POST)
router.post(`/${path}`, controller.insertData);

module.exports = router;
