/*!
 * melonJS Game Engine - v15.3.0
 * http://www.melonjs.org
 * melonjs is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * @copyright (C) 2011 - 2023 Olivier Biot (AltByte Pte Ltd)
 */
import EventEmitter from '../node_modules/eventemitter3/index.js';

/**
 * an event system based on nodeJS EventEmitter interface
 * @namespace event
 */

// internal instance of the event emiter
let eventEmitter = new EventEmitter();

/**
 * event when the DOM is Ready is booting
 * @public
 * @constant
 * @type {string}
 * @name DOM_READY
 * @memberof event
 * @see event.on
 */
const DOM_READY = "dom_ready";

/**
 * event when the system is booting
 * @public
 * @constant
 * @type {string}
 * @name BOOT
 * @memberof event
 * @see event.on
 */
const BOOT = "me.boot";

/**
 * event generated when the system update the engine and the renderer by one step
 * @public
 * @constant
 * @type {string}
 * @name TICK
 * @memberof event
 * @see event.on
 */
const TICK = "me.tick";

/**
 * event when the game is paused <br>
 * Data passed : none <br>
 * @public
 * @constant
 * @type {string}
 * @name STATE_PAUSE
 * @memberof event
 * @see event.on
 */
const STATE_PAUSE = "me.state.onPause";

/**
 * event for when the game is resumed <br>
 * Data passed : {number} time in ms the game was paused
 * @public
 * @constant
 * @type {string}
 * @name STATE_RESUME
 * @memberof event
 * @see event.on
 */
const STATE_RESUME = "me.state.onResume";

/**
 * event when the game is stopped <br>
 * Data passed : none <br>
 * @public
 * @constant
 * @type {string}
 * @name STATE_STOP
 * @memberof event
 * @see event.on
 */
const STATE_STOP = "me.state.onStop";

/**
 * event for when the game is restarted <br>
 * Data passed : {number} time in ms the game was stopped
 * @public
 * @constant
 * @type {string}
 * @name STATE_RESTART
 * @memberof event
 * @see event.on
 */
const STATE_RESTART = "me.state.onRestart";

/**
 * event for when the changing to a different stage
 * @public
 * @constant
 * @type {string}
 * @name STATE_CHANGE
 * @memberof event
 * @see event.on
 */
const STATE_CHANGE = "me.state.onChange";

/**
 * event for when a stage is resetted
 * @public
 * @constant
 * @type {string}
 * @name STAGE_RESET
 * @memberof event
 * @see event.on
*/
const STAGE_RESET = "me.stage.onReset";

/**
 * event for when the video is initialized<br>
 * Data passed : none <br>
 * @public
 * @constant
 * @type {string}
 * @name VIDEO_INIT
 * @memberof event
 * @see video.init
 * @see event.on
 */
const VIDEO_INIT = "me.video.onInit";

/**
 * event for when the game manager is initialized <br>
 * Data passed : none <br>
 * @public
 * @constant
 * @type {string}
 * @name GAME_INIT
 * @memberof event
 * @see event.on
 */
const GAME_INIT = "me.game.onInit";

/**
 * event for when the game manager is resetted <br>
 * Data passed : none <br>
 * @public
 * @constant
 * @type {string}
 * @name GAME_RESET
 * @memberof event
 * @see event.on
 */
const GAME_RESET = "me.game.onReset";

/**
 * event for when the engine is about to start a new game loop
 * Data passed : {number} time the current time stamp
 * @public
 * @constant
 * @type {string}
 * @name GAME_BEFORE_UPDATE
 * @memberof event
 * @see event.on
 */
const GAME_BEFORE_UPDATE = "me.game.beforeUpdate";

/**
 * event for the end of the update loop
 * Data passed : {number} time the current time stamp
 * @public
 * @constant
 * @type {string}
 * @name GAME_AFTER_UPDATE
 * @memberof event
 * @see event.on
 */
const GAME_AFTER_UPDATE = "me.game.afterUpdate";

/**
 * Event for when the game is updated (will be impacted by frame skip, frame interpolation and pause/resume state) <br>
 * Data passed : {number} time the current time stamp
 * @public
 * @constant
 * @type {string}
 * @name GAME_UPDATE
 * @memberof event
 * @see event.on
 */
const GAME_UPDATE = "me.game.onUpdate";

/**
 * Event for the end of the draw loop
 * Data passed : {number} time the current time stamp
 * @public
 * @constant
 * @type {string}
 * @name GAME_BEFORE_DRAW
 * @memberof event
 * @see event.on
 */
const GAME_BEFORE_DRAW = "me.game.beforeDraw";

/**
 * Event for the start of the draw loop
 * Data passed : {number} time the current time stamp
 * @public
 * @constant
 * @type {string}
 * @name GAME_AFTER_DRAW
 * @memberof event
 * @see event.on
 */
const GAME_AFTER_DRAW = "me.game.afterDraw";

/**
 * Event for when a level is loaded <br>
 * Data passed : {string} Level Name
 * @public
 * @constant
 * @type {string}
 * @name LEVEL_LOADED
 * @memberof event
 * @see event.on
 */
const LEVEL_LOADED = "me.game.onLevelLoaded";

/**
 * Event for when everything has loaded <br>
 * Data passed : none <br>
 * @public
 * @constant
 * @type {string}
 * @name LOADER_COMPLETE
 * @memberof event
 * @see event.on
 */
const LOADER_COMPLETE = "me.loader.onload";

/**
 * Event for displaying a load progress indicator <br>
 * Data passed : {number} [0 .. 1], {Resource} resource object<br>
 * @public
 * @constant
 * @type {string}
 * @name LOADER_PROGRESS
 * @memberof event
 * @see event.on
 */
const LOADER_PROGRESS = "me.loader.onProgress";

/**
 * Event for pressing a binded key <br>
 * Data passed : {string} user-defined action, {number} keyCode,
 * {boolean} edge state <br>
 * Edge-state is for detecting "locked" key bindings. When a locked key
 * is pressed and held, the first event will have the third argument
 * set true. Subsequent events will continue firing with the third
 * argument set false.
 * @public
 * @constant
 * @type {string}
 * @name KEYDOWN
 * @memberof event
 * @see event.on
 * @example
 * me.input.bindKey(me.input.KEY.X, "jump", true); // Edge-triggered
 * me.input.bindKey(me.input.KEY.Z, "shoot"); // Level-triggered
 * me.event.on(me.event.KEYDOWN, (action, keyCode, edge) => {
 *   // Checking bound keys
 *   if (action === "jump") {
 *       if (edge) {
 *           this.doJump();
 *       }
 *
 *       // Make character fall slower when holding the jump key
 *       this.vel.y = this.body.gravity;
 *   }
 * });
 */
const KEYDOWN = "me.input.keydown";

/**
 * Event for releasing a binded key <br>
 * Data passed : {string} user-defined action, {number} keyCode
 * @public
 * @constant
 * @type {string}
 * @name KEYUP
 * @memberof event
 * @see event.on
 * @example
 * me.event.on(me.event.KEYUP, (action, keyCode) => {
 *   // Checking unbound keys
 *   if (keyCode == me.input.KEY.ESC) {
 *       if (me.state.isPaused()) {
 *           me.state.resume();
 *       }
 *       else {
 *           me.state.pause();
 *       }
 *   }
 * });
 */
const KEYUP = "me.input.keyup";

/**
 * Event for when a gamepad is connected <br>
 * Data passed : {object} gamepad object
 * @public
 * @constant
 * @type {string}
 * @name GAMEPAD_CONNECTED
 * @memberof event
 * @see event.on
 */
const GAMEPAD_CONNECTED = "gamepad.connected";

/**
 * Event for when a gamepad is disconnected <br>
 * Data passed : {object} gamepad object
 * @public
 * @constant
 * @type {string}
 * @name GAMEPAD_DISCONNECTED
 * @memberof event
 * @see event.on
 */
const GAMEPAD_DISCONNECTED = "gamepad.disconnected";

/**
 * Event for when gamepad button/axis state is updated <br>
 * Data passed : {number} index <br>
 * Data passed : {string} type : "axes" or "buttons" <br>
 * Data passed : {number} button <br>
 * Data passed : {number} current.value <br>
 * Data passed : {boolean} current.pressed
 * @public
 * @constant
 * @type {string}
 * @name GAMEPAD_UPDATE
 * @memberof event
 * @see event.on
 */
const GAMEPAD_UPDATE = "gamepad.update";

/**
 * Event for pointermove events on the screen area <br>
 * Data passed : {me.Pointer} a Pointer object
 * @public
 * @constant
 * @type {string}
 * @name POINTERMOVE
 * @memberof event
 * @see event.on
 */
const POINTERMOVE = "me.event.pointermove";

/**
 * Event for onPointerLockChange event <br>
 * Data passed : {boolean} pointer lock status (true/false)
 * @public
 * @constant
 * @type {string}
 * @name POINTERLOCKCHANGE
 * @memberof event
 * @see event.on
 */
const POINTERLOCKCHANGE = "me.event.pointerlockChange";

/**
 * Event for dragstart events on a Draggable entity <br>
 * Data passed:
 * {object} the drag event <br>
 * {object} the Draggable entity
 * @public
 * @constant
 * @type {string}
 * @name DRAGSTART
 * @memberof event
 * @see event.on
 */
const DRAGSTART = "me.game.dragstart";

/**
 * Event for dragend events on a Draggable entity <br>
 * Data passed:
 * {object} the drag event <br>
 * {object} the Draggable entity
 * @public
 * @constant
 * @type {string}
 * @name DRAGEND
 * @memberof event
 * @see event.on
 */
const DRAGEND = "me.game.dragend";

/**
 * Event for when the (browser) window is resized <br>
 * Data passed : {Event} Event object
 * @public
 * @constant
 * @type {string}
 * @name WINDOW_ONRESIZE
 * @memberof event
 * @see event.on
 */
const WINDOW_ONRESIZE = "globalThis.onresize";

/**
 * Event for when the canvas is resized <br>
 * (this usually follows a WINDOW_ONRESIZE event).<br>
 * Data passed : {number} canvas width <br>
 * Data passed : {number} canvas height
 * @public
 * @constant
 * @type {string}
 * @name CANVAS_ONRESIZE
 * @memberof event
 * @see event.on
 */
const CANVAS_ONRESIZE = "canvas.onresize";

/**
 * Event for when the viewport is resized <br>
 * (this usually follows a WINDOW_ONRESIZE event, when using the `flex` scaling mode is used and after the viewport was updated).<br>
 * Data passed : {number} viewport width <br>
 * Data passed : {number} viewport height <br>
 * Data passed : {Camera2d} a reference to the camera viewport being resized
 * @public
 * @constant
 * @type {string}
 * @name VIEWPORT_ONRESIZE
 * @memberof event
 * @see event.on
 */
const VIEWPORT_ONRESIZE = "viewport.onresize";

/**
 * Event for when the device is rotated <br>
 * Data passed : {Event} Event object <br>
 * @public
 * @constant
 * @type {string}
 * @name WINDOW_ONORIENTATION_CHANGE
 * @memberof event
 * @see event.on
 */
const WINDOW_ONORIENTATION_CHANGE = "globalThis.orientationchange";

/**
 * Event for when the (browser) window is scrolled <br>
 * Data passed : {Event} Event object
 * @public
 * @constant
 * @type {string}
 * @name WINDOW_ONSCROLL
 * @memberof event
 * @see event.on
 */
const WINDOW_ONSCROLL = "globalThis.onscroll";

/**
 * Event for when the viewport position is updated <br>
 * Data passed : {me.Vector2d} viewport position vector
 * @public
 * @constant
 * @type {string}
 * @name VIEWPORT_ONCHANGE
 * @memberof event
 * @see event.on
 */
const VIEWPORT_ONCHANGE = "viewport.onchange";

/**
 * Event for when the current context is lost <br>
 * Data passed : {me.Renderer} the current renderer instance
 * @public
 * @constant
 * @type {string}
 * @name WEBGL_ONCONTEXT_LOST
 * @memberof event
 * @see event.on
 */
const ONCONTEXT_LOST = "renderer.contextlost";

/**
 * Event for when the current context is restored <br>
 * Data passed : {me.Renderer} the current renderer instance`
 * @public
 * @constant
 * @type {string}
 * @name ONCONTEXT_RESTORED
 * @memberof event
 * @see event.on
 */
const ONCONTEXT_RESTORED = "renderer.contextrestored";

/**
 * calls each of the listeners registered for a given event.
 * @function event.emit
 * @param {string|symbol} eventName - The event name.
 * @param {object} [...arguments] - arguments to be passed to all listeners
 * @returns {boolean} true if the event had listeners, false otherwise.
 * @example
 * me.event.emit("event-name", a, b, c);
 */
function emit(eventName, ...args) {
    return eventEmitter.emit(eventName, ...args);
}

/**
 * Add a listener for a given event.
 * @function event.on
 * @param {string|symbol} eventName - The event name.
 * @param {Function} listener - The listener function.
 * @param {*} [context=this] - The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 * @example
 * me.event.on("event-name", myFunction, this);
 */
function on(eventName, listener, context) {
    return eventEmitter.on(eventName, listener, context);
}

/**
 * Add a one-time listener for a given event.
 * @function event.once
 * @param {string|symbol} eventName - The event name.
 * @param {Function} listener - The listener function.
 * @param {*} [context=this] - The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 * @example
 * me.event.once("event-name", myFunction, this);
 */
function once(eventName, listener, context) {
    return eventEmitter.once(eventName, listener, context);
}

/**
 * remove the given listener for a given event.
 * @function event.off
 * @param {string|symbol} eventName - The event name.
 * @param {Function} listener - The listener function.
 * @returns {EventEmitter} `this`.
 * @public
 * @example
 * me.event.off("event-name", myFunction);
 */
function off(eventName, listener) {
    return eventEmitter.off(eventName, listener);
}

export { BOOT, CANVAS_ONRESIZE, DOM_READY, DRAGEND, DRAGSTART, GAMEPAD_CONNECTED, GAMEPAD_DISCONNECTED, GAMEPAD_UPDATE, GAME_AFTER_DRAW, GAME_AFTER_UPDATE, GAME_BEFORE_DRAW, GAME_BEFORE_UPDATE, GAME_INIT, GAME_RESET, GAME_UPDATE, KEYDOWN, KEYUP, LEVEL_LOADED, LOADER_COMPLETE, LOADER_PROGRESS, ONCONTEXT_LOST, ONCONTEXT_RESTORED, POINTERLOCKCHANGE, POINTERMOVE, STAGE_RESET, STATE_CHANGE, STATE_PAUSE, STATE_RESTART, STATE_RESUME, STATE_STOP, TICK, VIDEO_INIT, VIEWPORT_ONCHANGE, VIEWPORT_ONRESIZE, WINDOW_ONORIENTATION_CHANGE, WINDOW_ONRESIZE, WINDOW_ONSCROLL, emit, off, on, once };
