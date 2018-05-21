import { app, BrowserWindow, Menu } from 'electron';

import { onReady } from '@main/ready';


app.on('ready', onReady);
