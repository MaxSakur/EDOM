import isString from "lodash/isString";
import isObject from "lodash/isObject";
/**
 * Helper function for conditionally creating css class strings.
 *
 * Example usage:
 *   classNames('foo', ['bar', ''], { baz: false, bob: true });
 *   => 'foo bar bob'
 *
 * @module helpers/classNames
 * @param {...(String|String[]|Object)} args
 * @returns {String}
 */

export default function concatClassNames(...args) {
  const classes = [];
  for (const arg of args) {
    if (isString(arg)) {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(concatClassNames(...arg));
    } else if (isObject(arg)) {
      classes.push(concatClassNames(...Object.keys(arg).filter((k) => arg[k])));
    }
  }
  return classes.join(" ");
}
