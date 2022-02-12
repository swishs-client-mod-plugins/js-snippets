/* The below source code is licensed under MIT. */

export default class Logger {
  static #log(type, information) {
    console[type]('%c[JS-Snippets]', 'color: #80b1ff; font-weight: 700;', ...information);
  }

  static log = (...information) => this.#log('log', information);
  static info = (...information) => this.#log('info', information);
  static warn = (...information) => this.#log('warn', information);
  static error = (...information) => this.#log('error', information);
};