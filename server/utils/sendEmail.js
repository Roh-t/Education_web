import nodemailer from 'nodemailer';

let transporter;

const initTransporter = () => {
  if (transporter) return transporter; // Reuse if already created (connection reuse)

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: process.env.NODE_ENV === 'development' ? {
      rejectUnauthorized: false // only in dev
    } : undefined,
    pool: true, // ✅ enables connection pooling
    maxConnections: 5,
    maxMessages: 100,
  });

  return transporter;
};

const sendEmail = async (to, subject, html, options = {}) => {
  try {
    const mailOptions = {
      from: `"Course Platform" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      ...options,
    };

    const info = await initTransporter().sendMail(mailOptions);

    if (process.env.NODE_ENV !== 'production') {
      console.log(`📤 Email sent to ${to} | Message ID: ${info.messageId}`);
    }

    return info;
  } catch (error) {
    console.error('❌ Email failed:', error.message);
    throw new Error('Failed to send email');
  }
};

export default sendEmail;
