import express from 'express';
import connection from './db/db.js';
import cors from 'cors';

//Upload File
import { uploadFile, uploadMiddleware } from './actions/upload/uploadFile.js';
//Delete File
import { deleteFile } from './actions/delete/deleteFile.js';
//Download File
import { downloadFile } from './actions/download/downloadFile.js';
//Show all files
import { filesList } from './actions/fileslist/filesList.js';

const app = express();
app.use(cors());
connection();

//Upload single file
app.post('/upload', uploadMiddleware, uploadFile);

//Delete single file
app.delete('/delete/:filename', deleteFile);

//Download single file
app.get('/download/:fileName', downloadFile);

//Show all files
app.get('/files', filesList);

app.listen(3000, () => {
    console.log('App open at: localhost:3000');
})
