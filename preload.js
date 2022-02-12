/* The below source code is licensed under MIT. */

const fs = require('fs');
const path = require('path');
const electron = require('electron');

const writeFile = (_path, data, errorHandler) => {
  if (!fs.existsSync(path.join(__dirname, _path)))
    fs.mkdirSync(path.dirname(path.join(__dirname, _path)), { recursive: true });
  return fs.writeFileSync(path.join(__dirname, _path), data, errorHandler);
};

const readFile = (_path) => {
  if (!fs.existsSync(path.join(__dirname, _path))) return;
  return fs.readFileSync(path.join(__dirname, _path), 'utf-8');
};

const loadStyle = (_path) => {
  const file = path.join(__dirname, _path);
  if (!fs.existsSync(file)) return;

  return fs.readFileSync(file, 'utf-8');
};

const openPath = (_path) => {
  try {
    electron.shell.openPath(_path);
  } catch (error) {
    console.error('Fatal error:', error);
  }
};

electron.contextBridge.exposeInMainWorld('_JSS', {
  loadStyle, openPath, writeFile, readFile
});