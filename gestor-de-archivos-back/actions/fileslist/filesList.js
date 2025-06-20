import fileModel from '../../schemas/fileSchema.js';

const filesList = async (req, res) => {
    try {
        const files = await fileModel.aggregate([{
            $project: {
                originalName: 1,
                fileName: 1,
                type: 1,
                size: 1,
                url: {
                    $concat: ['http://a.zorilla-altered.ts.net:3000/download/','$fileName']
                }
            }}
        ])

        return res.json(files);
    } catch(err) {
        return res.status(500).json({
            message: 'Error getting files',
            error: err.message
        });
    }
};

export {filesList};