/**
 * Merge objects deeply.
 *
 * @export
 * @param sources The sources to merge.
 * @returns The merged output.
 * @internal
 */
export function merge(...sources: any[]): any {
  return sources.reduce((previous, obj) => {
    const keys = Object.keys(obj);

    for (const key of keys) {
      const previousValue = previous[key];
      const objectValue = obj[key];

      if (isObject(previousValue) && isObject(objectValue)) {
        previous[key] = merge(previousValue, objectValue);
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
function isObject(arg: any): arg is object {
  return arg && typeof arg === 'object';
}
