/* The below source code is licensed under MIT. */

import Logger from './logger';

export default class Patcher {
  static _patches = new Set();

  // ENUMS
  static #AFTER = 'AFTER';
  static #BEFORE = 'BEFORE';
  static #INSTEAD = 'INSTEAD';
  static #RECON = 'RECON';

  static #peformUnpach(_, module, functionString, __, originalFunction) {
    module[functionString] = originalFunction;
    this._patches.delete(Array.from(this._patches)[this._patches.size - 1]);
  };

  static #performPatch(type, module, functionString, replacementFunction) {
    const originalFunction = module[functionString];
    const unpatch = () => this.#peformUnpach(...arguments, originalFunction);

    try {
      let returnValue, classCallback = this;
      module[functionString] = function (...args) {
        switch (type) {
          case classCallback.#AFTER:
            returnValue = originalFunction.apply(this, args);
            return replacementFunction(args, returnValue) || returnValue;

          case classCallback.#BEFORE:
            returnValue = replacementFunction(args);
            return originalFunction.apply(this, returnValue || args);

          case classCallback.#INSTEAD:
            return replacementFunction(args, originalFunction);

          case classCallback.#RECON:
            returnValue = originalFunction.apply(this, args);
            Logger.info(`Function: ${functionString} called!`, module, args, returnValue);
            // Treating this as the runOnce variable.
            if (replacementFunction) unpatch();
            return returnValue;
        }
      };

      Object.assign(module[functionString], originalFunction, {
        toString: () => originalFunction.toString(),
        __originalFunction: originalFunction
      });
    } catch (error) {
      Logger.error(`Failed to patch ${functionString}.`, error);
    }

    this._patches.add(unpatch);
    return unpatch;
  }

  static unpatchAll() {
    Array.from(this._patches).forEach(unpatch => {
      try { unpatch(); } catch (error) {
        Logger.error(`Could not unpatch function ${unpatch}!`);
      } Logger.info(`Successfully unpatched function ${unpatch}!`);
    });
    Logger.info('Unpatched all patches!');
  }

  static recon = (...args) => this.#performPatch(this.#RECON, ...args);
  static after = (...args) => this.#performPatch(this.#AFTER, ...args);
  static before = (...args) => this.#performPatch(this.#BEFORE, ...args);
  static instead = (...args) => this.#performPatch(this.#INSTEAD, ...args);
}