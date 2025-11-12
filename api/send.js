import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // set these in Vercel dashboard
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:${message}`,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
