const ruanganModel = require('../models/ruanganModel');

exports.getroom = async (req, res) => {
    const room = await ruanganModel.getroom();
    res.render('ruangan/list', { room })
};

exports.getroomForm = async (req, res) => {
    let room = null;
    const room_id = req.params.room_id
    if(room_id){
        room = await ruanganModel.getroomById(room_id);
    }
    res.render('ruangan/form', { room })
};

exports.createroom = async (req, res) => {
    const {nama, lokasi } = req.body;
    await ruanganModel.createroom(nama, lokasi);
    res.redirect('/ruangan');
};

exports.updateroom = async (req, res) => {
    const { nama, lokasi } = req.body;
    const room_id = req.params.room_id
    await ruanganModel.updateroom(room_id, nama, lokasi);
    res.redirect('/ruangan');
};

exports.deleteroom = async (req, res) => {
    const room_id = req.params.room_id
    await ruanganModel.deleteroom(room_id);
    res.redirect('/ruangan');
};