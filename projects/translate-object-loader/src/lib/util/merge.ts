// @dynamic
export class Util {
  /**
   * Merge objects deeply.
   *
   * @export
   * @param sources The sources to merge.
   * @returns The merged output.
   * @internal
   */
  static merge(...sources: any[]): any {
    return sources.reduce((previous, obj) => {
      for (const key of Object.keys(obj)) {
        const previousValue = previous[key];
        const objectValue = obj[key];

        if (Util.isObject(previousValue) && Util.isObject(objectValue)) {
          previous[key] = Util.merge(previousValue, objectValue);
        } else {
          previous[key] = objectValue;
        }
      }

      return previous;
    }, {});
  }

  /**
   * Check if `arg` is an object.
   *
   * @param  arg The argument to check
   * @returns Whether arg is an object.
   * @internal
   */
  private static isObject(arg: any): boolean {
    return arg && typeof arg === 'object';
  }
}
