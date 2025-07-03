import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://portfolio-meliana.vercel.app"
  ],
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: "Nama, email, dan pesan harus diisi" 
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Pesan Baru dari Portfolio: ${name}`,
    text: `
Nama: ${name}
Email: ${email}
Telepon: ${phone || 'Tidak diisi'}
Pesan: 
${message}
    `,
    html: `
      <h2>Pesan Baru dari Portfolio</h2>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telepon:</strong> ${phone}</p>` : ''}
      <p><strong>Pesan:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      success: true,
      message: "Pesan berhasil dikirim!" 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      success: false,
      message: "Gagal mengirim pesan",
      error: error.message 
    });
  }
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});