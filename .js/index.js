import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = process.cwd();
const files = fs.readdirSync(root);

files.forEach(file => {
    const folderPath = path.join(__dirname, path.extname(file));
    if (fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory()) {
        console.log('Folder exists!');
        const oldPath = path.join(__dirname, file);
        const newPath = path.join(__dirname, path.extname(file), file);

        fs.rename(oldPath, newPath, (err) => {
            if (err) throw err;
            console.log('File moved!');
        });
    } else {
        fs.mkdir(path.extname(file), (err) => {
            if (err) throw err;
            console.log('Folder created!');
        });
        const oldPath = path.join(__dirname, file);
        const newPath = path.join(__dirname, file);

        fs.rename(oldPath, newPath, (err) => {
            if (err) throw err;
            console.log('Folder created!');
        });
    }
});


