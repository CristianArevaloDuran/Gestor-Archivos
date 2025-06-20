import fileModel from '../../schemas/fileSchema.js';
import fs from 'fs';

const downloadFile = async (req, res) => {
    const fileName = req.params.fileName;

    //Search for the filedata in db
    try {
        const file = await fileModel.findOne({
            fileName: fileName
        })

        if(!file) {
            return res.status(404).json({
                message: 'File not found'
            });
        };

        try {
            await fs.promises.access(file.path, fs.constants.F_OK);

            const stat = fs.statSync(file.path);            

            res.writeHead(200, {
                'Content-Type': file.type,
                'Content-Length': stat.size,
                'Content-Disposition': `attachment; filename=${file.originalName}`
            });

            const readStream = fs.createReadStream(file.path);

            readStream.pipe(res);

            res.on('finish', async () => {
                try {
                    await fileModel.updateOne({
                        _id: file._id
                    }, {
                        $inc: {downloads: 1}
                    });
                } catch(err) {
                    console.log(err.message);
                }
            });
            
        } catch(err) {
            await fileModel.deleteOne({
                _id: file._id
            })

            return res.status(404).json({
                message: 'File not found in disk',
                error: err.message
            })
        }

    } catch(err) {
        return res.status(500).json({
            message: 'Error downloading file',
            error: err.message
        })
    }
}

export {downloadFile};