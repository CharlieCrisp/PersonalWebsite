/**
 * Just like our store, we configure a 'Root' component that is
 * required based on the env variable. This component is typically one
 * surrounded by a <Provider>.
 */

let loadedModule = null;

loadedModule = require('./Root.prod.js');
//Use this line to allow dev tools...
//loadedModule = require('./Root.dev.js');


export const Root = loadedModule;
