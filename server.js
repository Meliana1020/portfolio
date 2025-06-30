import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Allow CORS for dev frontend (Vite default: 5173)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Konfigurasi Email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // email kamu dari .env
      pass: process.env.EMAIL_PASS, // app password dari .env
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Email tujuan (kamu)
    subject: `Pesan dari Portfolio: ${name}`,
    text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Pesan berhasil dikirim!" });
  } catch (error) {
  console.error(error);
  res.status(500).json({ message: "Gagal mengirim pesan", error: error.message });
}
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});