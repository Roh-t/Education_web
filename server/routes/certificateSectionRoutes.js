import express from 'express';
import { getCertificateSection, updateCertificateSection } from '../controllers/certificateSectionController.js';

const router = express.Router();

router.get('/', getCertificateSection);
router.put('/', updateCertificateSection); // Protect this route with auth in production

export default router;
