const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path')
const Menu = electron.Menu;

app.on('ready', () => {
  let win = new BrowserWindow({width:1280, height: 720, frame: false, titleBarStyle: 'hidden'});
  win.loadURL(`file://${__dirname}/index.html`);
});
