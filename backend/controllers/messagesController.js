const pool = require('../db');
const nodemailer = require('nodemailer');

exports.createMessage = async (req, res) => {
  const { name, email, content } = req.body;

  if (!name || !email || !content) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Insertar en la base
    await pool.query(
      'INSERT INTO message (name, email, content) VALUES ($1, $2, $3)',
      [name, email, content]
    );

    // Enviar correo
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Web Personal Contacto" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: 'Nuevo mensaje de contacto',
      text: `Has recibido un nuevo mensaje de contacto: \n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${content}`
    });

    res.status(200).json({ message: 'Message saved and email sent' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};