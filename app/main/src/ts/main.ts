import { app, BrowserWindow } from 'electron';

let win;
const isDev = process.env.NODE_ENV === 'development';

app.on('ready', () => {
    win = new BrowserWindow();
    const url = isDev ? 'http://localhost:3000' : './index.html';
    console.log(url);
    win.loadURL(url);
});