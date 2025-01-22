const db = require('../config/db');

async function getroom() {
    const [rows] = await db.query('SELECT * FROM ruangan');
    return rows;
}

async function getroomById(room_id) {
    const [rows] = await db.query('SELECT * FROM ruangan WHERE room_id = ?', [room_id]);
    return rows[0];
}

async function createroom(nama, lokasi) {
    const [result] = await db.query('INSERT INTO ruangan (nama, lokasi) VALUES (?, ?)', [nama, lokasi]);
    return result.insertId;
}

async function updateroom(room_id, nama, lokasi) {
    await db.query('UPDATE ruangan SET nama = ?, lokasi = ? WHERE room_id = ?', [nama, lokasi, room_id]);
}

async function deleteroom(room_id) {
    await db.query('DELETE FROM ruangan WHERE room_id = ?', [room_id]);
}

module.exports = {
    getroom,
    getroomById,
    createroom,
    updateroom,
    deleteroom,
}