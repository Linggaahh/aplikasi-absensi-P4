const db = require('../config/db');

async function getAbsensi() {
    const [rows] = await db.query('SELECT * FROM absensi');
    return rows;
}

async function getAbsensiById(absensi_id) {
    const [rows] = await db.query('SELECT * FROM absensi WHERE absensi_id = ?', [absensi_id]);
    return rows[0];
}

async function createAbsensi(room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan) {
    const [result] = await db.query('INSERT INTO absensi (room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan) VALUES (?, ?, ?, ?, ?)', [room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan]);
    return result.insertId;
}

async function updateAbsensi(absensi_id, room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan) {
    await db.query('UPDATE absensi SET room_id = ?, nama_tamu = ?, waktu_masuk = ?, waktu_keluar = ?, keperluan = ? WHERE absensi_id = ?', [room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan, absensi_id]);
}

async function deleteAbsensi(absensi_id) {
    await db.query('DELETE FROM absensi WHERE absensi_id = ?', [absensi_id]);
}

module.exports = {
    getAbsensi,
    getAbsensiById,
    createAbsensi,
    updateAbsensi,
    deleteAbsensi,
};
