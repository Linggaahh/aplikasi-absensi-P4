const absensiModel = require('../models/absensiModel');
const ruanganModel = require('../models/ruanganModel');

exports.getAbsensi = async (req, res) => {
    const absensi = await absensiModel.getAbsensi();
    const rooms = await ruanganModel.getroom(); // Mengambil data ruangan
    res.render('absensi/list', { absensi, rooms }); // Mengirimkan data absensi dan ruangan ke view
};

// Menampilkan Form Absensi (Create/Edit)
exports.getAbsensiForm = async (req, res) => {
    let absensi = null;
    const absensi_id = req.params.absensi_id;
    const room_id = req.query.room_id; // Ambil room_id dari query parameter

    // Mengambil data ruangan
    const rooms = await ruanganModel.getroom();

    if (absensi_id) {
        absensi = await absensiModel.getAbsensiById(absensi_id);
    }

    // Render form absensi, kirimkan data ruangan dan absensi
    res.render('absensi/form', { absensi, rooms, room_id }); // Kirimkan room_id ke view
};


// Menyimpan Absensi Baru
exports.createAbsensi = async (req, res) => {
    const { room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan } = req.body;
    await absensiModel.createAbsensi(room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan);
    res.redirect('/absensi');
};

// Mengupdate Absensi
exports.updateAbsensi = async (req, res) => {
    const { room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan } = req.body;
    const absensi_id = req.params.absensi_id;
    await absensiModel.updateAbsensi(absensi_id, room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan);
    res.redirect('/absensi');
};

// Menghapus Absensi
exports.deleteAbsensi = async (req, res) => {
    const absensi_id = req.params.absensi_id;
    await absensiModel.deleteAbsensi(absensi_id);
    res.redirect('/absensi');
};
