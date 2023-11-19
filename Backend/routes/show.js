require('dotenv').config();
const router=require('express').Router();
const File=require('../models/file');

router.get('/:uuid', async(req,res) => {
    try{
        const uuid=req.params.uuid;
        const file=await File.findOne({uuid:uuid});

        if(!file){
            return res.render('download', {error: 'Link is expired'});//local error
        }

        return res.render('download', {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })
    }
    catch(err){
        return res.render('download', {error: 'Something went wrong!'});
    }
    
});

module.exports=router;