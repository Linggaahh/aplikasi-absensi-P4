const express = require('express');
const router = express.Router();
const ruanganController = require('../controllers/ruanganController');

//READ
router.get('/', ruanganController.getroom); 

//CREATE
router.get('/tambah', ruanganController.getroomForm); 
router.post('/tambah', ruanganController.createroom); 

// UPDATE
router.get('/:room_id/edit', ruanganController.getroomForm);
router.post('/:room_id/edit', ruanganController.updateroom); //post || put atau patch untuk profesional

// DELETE
router.get('/:room_id/delete', ruanganController.deleteroom);

module.exports = router;