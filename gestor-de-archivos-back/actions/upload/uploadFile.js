import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import fs from 'fs';
import fileModel from '../../schemas/fileSchema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '../..');

const dir = path.join(root, 'uploads');

if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

//Setting up multer

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const suffix = Date.now() + '-' + Math.round(Math.random()*1E9);
        const ext = path.extname(file.originalname);
        const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8');
        const name = file.originalname.split('.').slice(0, -1).join('.');
        const fileName = name + '-' + suffix + ext
        req.tempPath = path.join(dir, fileName)
        cb(null, fileName);
    }
});

const upload = multer({storage})
const uploadMiddleware = (req, res, next) => {
    
    req.on('aborted', () => {
        fs.unlink(req.tempPath, (err) => {
            if (err) {
                console.log(err);
            }
        })
    })

    upload.single('file')(req, res, function (err) {
        next();
    })
};

//Handles file uploading

const uploadFile = async (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');
    
    
    req.on('aborted', () => {
        console.log('aborted');
        
        
    });

    req.on('close', () => {
        console.log('close');
        
    });
    

    const newFile = new fileModel({
        originalName: Buffer.from(req.file.originalname, 'latin1').toString('utf8'),
        fileName: req.file.filename,
        path: path.join(dir, req.file.filename),
        type: req.file.mimetype,
        size: req.file.size
    });

    //Saving filedata in db
    try {
        newFile.save()
        newFile.url = `http://a.zorilla-altered.ts.net:3000/download/${req.file.filename}`;
        return res.status(200).json({
            message: 'File saved',
            file: newFile
        })
    } catch(err) {
        return res.status(500).send(err.message)
    }
};

export {uploadFile, uploadMiddleware};