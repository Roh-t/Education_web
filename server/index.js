import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import heroRoutes from "./routes/heroRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import infoRoutes from "./routes/infoRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import focusRoutes from './routes/focusRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';
import workRoutes from './routes/workRoutes.js';
import footerRoutes from './routes/footerRoutes.js';
import youtubeReviewRoutes from "./routes/youtubeReviewRoutes.js";
import youtubeIntroCardRoutes from './routes/youtubeIntroCardRoutes.js';
import youtubeIntroRoutes from './routes/youtubeIntroRoutes.js';
import youtubeTrailerRoutes from './routes/youtubeTrailerRoutes.js';
import youtubeFooterRoutes from './routes/youtubeFooterRoutes.js';
import youtubeBlueprintRoutes from './routes/youtubeBlueprintRoutes.js';
import youtubeFAQRoutes from './routes/youtubeFAQRoutes.js';
import minimalNavbarRoutes from './routes/minimalNavbarRoutes.js';
import instructorIntroRoutes from './routes/instructorIntroRoutes.js';
import navbarRoutes from './routes/navbarRoutes.js';
import blueprintCardRoutes from './routes/blueprintCardRoutes.js';
import certificateSectionRoutes from './routes/certificateSectionRoutes.js';
import contactUsRoutes from './routes/contactUsRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import courseDetailsRoutes from './routes/courseDetailsRoutes.js';

dotenv.config(); // ✅ Load env variables early

const app = express();

// ✅ 1. DB Connection
connectDB(); // You might wrap this with error handling if needed

// ✅ 2. Middleware — Order matters
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json({ limit: '10kb' })); // 🛡️ Prevent abuse (limit payload)
app.use(cookieParser()); // 🍪 Parse cookies

// ✅ 3. Routes
app.use('/api/auth', authRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/info", infoRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use('/api/focus', focusRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/work', workRoutes);
app.use('/api/footer', footerRoutes);
app.use("/api/youtube-intro", youtubeIntroRoutes);
app.use("/api/youtube-reviews", youtubeReviewRoutes);
app.use('/api/youtube-intro-card', youtubeIntroCardRoutes);
app.use('/api/youtube-intro', youtubeIntroRoutes);
app.use('/api/youtube-trailer', youtubeTrailerRoutes);
app.use('/api/youtube-footer', youtubeFooterRoutes);
app.use('/api/youtube-blueprint', youtubeBlueprintRoutes);
app.use('/api/youtube-faqs', youtubeFAQRoutes);
app.use('/api/minimal-navbar', minimalNavbarRoutes);
app.use('/api/instructor-intro', instructorIntroRoutes);
app.use('/api/navbar', navbarRoutes);
app.use('/api/blueprint-cards', blueprintCardRoutes);
app.use('/api/certificate-section', certificateSectionRoutes);
app.use('/api/contact-us', contactUsRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/coursedetails', courseDetailsRoutes);

// ✅ 4. Health check route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// ✅ 5. 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ msg: 'Route not found' });
});

// ✅ 6. Global error handler (optional enhancement)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Internal Server Error', error: err.message });
});

// ✅ 7. Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
