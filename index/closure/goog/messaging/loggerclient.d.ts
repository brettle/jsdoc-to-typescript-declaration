// Generated Wed Apr 30 22:40:49 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />

declare module goog.messaging {

    /**
     * Creates a logger client that sends messages along a message channel for the
     * remote end to log. The remote end of the channel should use a
     * {goog.messaging.LoggerServer} with the same service name.
     *
     * @param {!goog.messaging.MessageChannel} channel The channel that on which to
     *     send the log messages.
     * @param {string} serviceName The name of the logging service to use.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class LoggerClient extends goog.Disposable {
        /**
         * Creates a logger client that sends messages along a message channel for the
         * remote end to log. The remote end of the channel should use a
         * {goog.messaging.LoggerServer} with the same service name.
         *
         * @param {!goog.messaging.MessageChannel} channel The channel that on which to
         *     send the log messages.
         * @param {string} serviceName The name of the logging service to use.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(channel: goog.messaging.MessageChannel, serviceName: string);
    }
}

