// usage examples:
//
// import {getScrollTop} from './utilities';
// or
// import * as Utils from './utilities';

/**
 * Detect breakpoints - see https://adactio.com/journal/5429 for more info on usage
 * @return {String} - the value of breakpoint set in the CSS
 */
export function getBreakpoint() {
  return window
    .getComputedStyle(document.body, ':after')
    .getPropertyValue('content');
}

/**
 * Get scroll position
 * @return {Undefined}
 */
export function getScrollTop() {
  let doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}
