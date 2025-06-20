import fileModel from '../../schemas/fileSchema.js';
import fs from 'fs';

const deleteFile = async (req, res) => {
    const fileName = req.params.filename;

    try {
        //Locating filedata in db
        const file = await fileModel.findOne({
            fileName
        });

        if(!file) {
            return res.status(404).json({
                message: 'File not found'
            });
        }

        //Locating file in disk
        try {
            await fs.promises.access(file.path, fs.constants.F_OK);
        } catch (err) {
            await fileModel.deleteOne({
                _id: file._id
            });
            return res.status(404).json({
                message: 'File not found in disk'
            });
        }

        //Deleting file from disk
        try {
            fs.unlink(file.path, (err) => {
                //
            });
        } catch(err) {
            return res.status(500).json({
                message: 'Error deleting file',
                error: err.message
            });
        }

        //Deleting filedata from db
        const result = await fileModel.deleteOne({
            _id: file._id
        });

        if(result.deletedCount > 0) {
            return res.status(200).json({
                message: 'File deleted',
                file: result.originalName
            })
        } else {
            return res.status(500).json({
                message: 'Error deleting file from db'
            })
        }

    } catch(err) {
        return res.status(500).json({
            message: 'Somenthing went wrong',
            error: err.message
        });
    }
}

export {deleteFile};