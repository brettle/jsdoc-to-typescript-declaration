// Generated Wed Apr 30 22:44:46 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />

declare module goog.debug.entryPointRegistry {

    /**
     * Register an entry point with this module.
     *
     * The entry point will be instrumented when a monitor is passed to
     * goog.debug.entryPointRegistry.monitorAll. If this has already occurred, the
     * entry point is instrumented immediately.
     *
     * @param {function(!Function)} callback A callback function which is called
     *     with a transforming function to instrument the entry point. The callback
     *     is responsible for wrapping the relevant entry point with the
     *     transforming function.
     */
    function register(callback: (_0: Function) => any /*missing*/): void;

    /**
     * Configures a monitor to wrap all entry points.
     *
     * Entry points that have already been registered are immediately wrapped by
     * the monitor. When an entry point is registered in the future, it will also
     * be wrapped by the monitor when it is registered.
     *
     * @param {!goog.debug.EntryPointMonitor} monitor An entry point monitor.
     */
    function monitorAll(monitor: goog.debug.EntryPointMonitor): void;

    /**
     * Try to unmonitor all the entry points that have already been registered. If
     * an entry point is registered in the future, it will not be wrapped by the
     * monitor when it is registered. Note that this may fail if the entry points
     * have additional wrapping.
     *
     * @param {!goog.debug.EntryPointMonitor} monitor The last monitor to wrap
     *     the entry points.
     * @throws {Error} If the monitor is not the most recently configured monitor.
     */
    function unmonitorAllIfPossible(monitor: goog.debug.EntryPointMonitor): void;
}

declare module goog.debug {

    /**
     * @interface
     */
    interface EntryPointMonitor {
        wrap: any /*missing*/;
        unwrap: any /*missing*/;
    }
}
