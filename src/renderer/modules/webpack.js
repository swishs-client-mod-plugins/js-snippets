/* The below source code is licensed under MIT. */

import Logger from './logger';

export default class Webpack {
  static WebpackInstance;
  static getWebpackInstance() {
    let list, id = Math.random().toString().slice(2, 5);
    webpackChunkdiscord_app.push([[id], {}, e => list = e]);
    webpackChunkdiscord_app.pop();
    this.WebpackInstance = list.c;
  }

  static onLoad(onLoadFunction) {
    new Promise(resolve => {
      setInterval(() => {
        if (!Array.isArray(window['webpackChunkdiscord_app'])) return;
        const FluxDispatcher = this.getByProps('dirtyDispatch');
        FluxDispatcher?.subscribe('START_SESSION', function onStartSession() {
          FluxDispatcher.unsubscribe('START_SESSION', onStartSession); resolve();
        });
      }, 100);
    }).then(onLoadFunction);
  }

  static #getModule(filter, returnAll = false) {
    if (!this.WebpackInstance) this.getWebpackInstance();

    const findModule = () => {
      const matches = Object.values(this.WebpackInstance).map((mdl) => {
        const module = mdl?.exports;
        if (module?.default && module.__esModule && filter(module.default))
          return module.default;
        if (module && filter(module)) return module;
      }).filter(Boolean);
      return returnAll ? matches : matches[0];
    };

    try { return findModule(); } catch (error) {
      Logger.error(`Failed to parse: ${filter}`, error);
    }
  }

  static #filters = {
    props: (props) => (module) => props.every(prop => module[prop]),
    prototypes: (protoProps) => (module) => protoProps.every(prop => module.prototype?.[prop]),
    displayName: (displayName, dexport) => (module) => (dexport ? module : module.default)?.displayName === displayName,
  };

  static getModule = (filter) => this.#getModule(filter);
  static getAllModules = (filter) => this.#getModule(filter, true);

  static getByProps = (...props) => this.#getModule(this.#filters.props(props));
  static getByPropsAll = (...props) => this.#getModule(this.#filters.props(props), true);

  static getByPrototype = (...protoProps) => this.#getModule(this.#filters.prototypes(protoProps));
  static getByPrototypeAll = (...protoProps) => this.#getModule(this.#filters.prototypes(protoProps), true);

  static getByDisplayName = (displayName, dexport = true) => this.#getModule(this.#filters.displayName(displayName, dexport));
  static getByDisplayNameAll = (displayName, dexport = true) => this.#getModule(this.#filters.displayName(displayName, dexport), true);

  /* Aliases */
  static findModule = this.getModule;
  static findAllModules = this.getAllModules;
  static findByProps = this.getByProps;
  static findByPropsAll = this.getByPropsAll;
  static findByPrototypes = this.getByPrototype;
  static findByPrototypesAll = this.getByPrototypeAll;
  static findByDisplayName = this.getByDisplayName;
  static findByDisplayNameAll = this.getByDisplayNameAll;
}