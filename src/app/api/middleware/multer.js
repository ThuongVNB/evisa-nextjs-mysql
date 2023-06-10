import { multer } from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the destination folder for uploaded files
        cb(null, '@/public/');
    },
    filename: function (req, file, cb) {
        // Set the file name for uploaded files
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).any();
