const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path')
const Menu = electron.Menu;
const remote = require('electron').remote;

app.on('ready', () => {
  let win = new BrowserWindow({width:1355, height: 498, titleBarStyle: 'hidden-inset', backgroundColor: '#EF5350'});
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
});
