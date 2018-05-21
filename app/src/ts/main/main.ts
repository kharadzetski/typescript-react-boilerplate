import { app, BrowserWindow, Menu } from 'electron';

let win;
const isDev = process.env.NODE_ENV === 'development';

app.on('ready', () => {
    win = new BrowserWindow();
    const url = isDev ? 'http://localhost:8080' : `file://${__dirname}/index.html`;
    win.loadURL(url);
});
