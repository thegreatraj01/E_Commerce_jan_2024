import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';

const router = express.Router();
const storage = multer.diskStorage({
    destination: './multer/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Upload route
router.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: true,
        filename: req.file.filename
    });
});

// Serve the uploaded images statically within the router
router.use('/images', express.static('./multer/images'));

// Delete route
router.delete('/delete/:filename', async (req, res) => {
    try {
        const filename = req.params.filename;
        const filePath = path.join('./multer/images', filename);
        console.log(filename, filePath)

        // Check if the file exists
        const fileExists = await fs.access(filePath).then(() => true).catch(() => false);

        if (fileExists) {
            // Delete the file
            await fs.unlink(filePath);
            // console.log(`Deleted file: ${filePath}`);

            res.json({
                success: true,
                message: 'File deleted successfully',
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'File not found',
            });
        }
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

export default router;
export {upload};
