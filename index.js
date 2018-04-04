/**
 * Original solution proposed by László Balogh
 * after my reply in Stack Overflow
 * https://stackoverflow.com/questions/49638355/isomorphic-hyperhtml-components-without-passing-in-wires/49647934#49647934
 * Readapted as module by Andrea Giammarchi
 * to be installed and consumed as regular module
 */

module.exports = typeof document === 'object' ?
  require('hyperhtml/cjs') :
  require('viperhtml');
