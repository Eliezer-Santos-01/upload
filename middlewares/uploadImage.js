const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination:(req, file, cb)=>{
            cb(null, './public/uploads/users')
        },
        filename: (req, file, cb)=>{
            cb(null, Date.now().toString() + "_" + file.originalname) 
        }
    }),
    fileFilter: (req, file, cb)=>{
        const extensãoImg =['image/png', 'image/jpeg', 'image/jpg'].find(formatoAceito => formatoAceito == file.mimetype)

        if(extensãoImg){
            return cb(null, true)
        }
        return cb(null, false);

    }
}));