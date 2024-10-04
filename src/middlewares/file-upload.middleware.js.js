import multer from "multer";

const storageConfiguration=multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,'public/pdfs') 
    },
    filename:(req,file,cb)=>{
        const pdfName= Date.now()+"-"+file.originalname;
        cb(null,pdfName);
        
    }
})


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/img')
    },
    filename:(req,file,cb)=>{
        const imgurl=Date.now()+"-"+file.originalname;
        cb(null,imgurl);
    }
})

export const uploadPdf=  multer({storage:storageConfiguration});
export const uploadImg=multer({storage:storage});