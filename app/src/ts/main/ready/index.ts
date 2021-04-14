import { BrowserWindow } from "electron";

let win;
const isDev = process.env.NODE_ENV === "development";

export const onReady = () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  const url = isDev
    ? "http://localhost:8080"
    : `file://${__dirname}/index.html`;
  win.loadURL(url);
};
