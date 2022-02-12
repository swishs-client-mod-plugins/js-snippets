/* The below source code is licensed under MIT. */

import Logger from './logger';
import modules from './modules';

export default class Manger {
  static #JSS = window._JSS;
  static #PATH = 'src/snippets.json';

  static makeToast(info, success) {
    const { createToast, showToast } = modules();

    showToast(createToast(info, Number(success) || 2));
  }

  static unpatches = {};
  static unpatchAll() {
    Object.keys(this.unpatches).forEach(async key => {
      try {
        await this.unpatches[key]();
        delete this.unpatches[key];
      } catch (error) {
        this.makeToast(`Error running the cleanup function for ${key}! Check console for more details.`);
        return Logger.error(`Error running the cleanup function for ${key}!`, error);
      }
    });
  }

  static get snippets() {
    const snippets = this.#JSS.readFile(this.#PATH);
    return snippets ? JSON.parse(snippets) : {};
  }

  static #writeSnippets(data) {
    this.#JSS.writeFile(this.#PATH, JSON.stringify(data, null, '\t'), (error) => {
      this.makeToast(`Error trying to write to the snippets file! Check console for more details.`);
      Logger.error('Error trying to write to the snippets file!', error);
    });
  };

  static backupSnippets() {
    const { i18n } = modules();
    const timestamp = new Date().toLocaleString(
      i18n.getLocale(), { hourCycle: 'h24' }
    ).replace(/[\/:]/g, '-').replace(', ', '-');

    this.#JSS.writeFile(`src/backup-${timestamp}.json`, JSON.stringify(this.snippets), (error) => {
      this.makeToast(`Error trying to back up the snippets file! Check console for more details.`);
      Logger.error('Error trying to back up the snippets file!', error);
    });
  }

  static getSnippet(key) {
    let snippets = this.snippets;

    if (!Object.keys(snippets).length)
      return ['', false];

    return snippets[key];
  }

  static createSnippet(key, value) {
    let snippets = this.snippets;

    try { Object.assign(snippets, { [key]: value ? [value, false] : ['', false] }); } catch (error) {
      this.makeToast(`Error creating snippet ${key}! Check console for more details.`);
      return Logger.error(`Error creating snippet ${key}.`, error);
    }

    this.#writeSnippets(snippets);
  }

  static deleteSnippet(key) {
    let snippets = this.snippets;

    try { delete snippets[key]; } catch (error) {
      this.makeToast(`Error deleting snippet ${key}! Check console for more details.`);
      return Logger.error(`Error deleting snippet ${key}!`, error);
    }

    this.#writeSnippets(snippets);
  }

  static updateSnippet(key, value = this.snippets[key][0], startup = this.snippets[key][1]) {
    let snippets = this.snippets;

    try { Object.assign(snippets, { [key]: [value, startup] }); } catch (error) {
      this.makeToast(`Error updating snippet ${key}! Check console for more details.`);
      return Logger.error(`Error updating snippet ${key}!`, error);
    }

    this.#writeSnippets(snippets);
  }

  static changeName(key, newKey) {
    let snippets = this.snippets;

    try {
      let index = Object.keys(snippets).indexOf(key);
      let array = Object.keys(snippets).map((snippet) => {
        return [snippet, snippets[snippet]];
      });

      array.splice(index, 1, [newKey, snippets[key]]);

      snippets = Object.fromEntries(array);
    } catch (error) {
      this.makeToast(`Error renaming snippet ${key} to ${newKey}! Check console for more details.`);
      return Logger.error(`Error renaming snippet ${key} to ${newKey}!`, error);
    }

    this.#writeSnippets(snippets);
  }

  static moveSnippet(key, index) {
    let snippets = this.snippets;

    try {
      let value = snippets[key];

      let array = Object.keys(snippets).map((snippet) => {
        if (snippet !== key) return [snippet, snippets[snippet]];
      }).filter(Boolean);

      array.splice(index, 0, [key, value]);

      snippets = Object.fromEntries(array);
    } catch (error) {
      this.makeToast(`Error moving snippet ${key}! Check console for more details.`);
      return Logger.error(`Error moving snippet ${key}!`, error);
    }


    this.#writeSnippets(snippets);
  }

  static async runSnippet(key, value, startup) {
    let snippet = value || this.snippets[key]?.[0];

    if (!snippet) {
      return Logger.warn(`Snippet ${key} is empty!`);
    }

    // run cleanup function
    await this.unpatches[key]?.();

    let returnValue;
    try {
      // define scope vars
      let Logger = (await import('./logger')).default;
      let Patcher = (await import('./patcher')).default;
      let Webpack = (await import('./webpack')).default;

      returnValue = await eval(`(async () => { ${snippet} })()`);
    } catch (error) {
      this.makeToast(`Error running snippet ${key}! Check console for more details.`);
      return Logger.error(`Error running snippet ${key}!`, error);
    }

    let unpatchReturn;
    if (typeof returnValue === 'function') {
      this.unpatches[key] = async () => {
        try {
          unpatchReturn = await returnValue();
          delete this.unpatches[key];
        } catch (error) {
          this.makeToast(`Error running the cleanup function for ${key}! Check console for more details.`);
          return Logger.error(`Error running the cleanup function for ${key}!`, error);
        }

        this.makeToast(`Successfully ran cleanup function for ${key}! Check console for more details.`, true);
        Logger.info(`Successfully ran cleanup function for ${key}!`, unpatchReturn ? ` Returned: ${unpatchReturn}` : '');
      };
    }

    startup ?? this.makeToast(`Successfully ran ${key}! Check console for more details.`, true);
    Logger.info(`Successfully ran ${key}!`, returnValue ? ` Returned: ${returnValue}` : '');
  }
}