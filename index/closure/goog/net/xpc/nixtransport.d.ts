// Generated Wed Apr 30 22:40:20 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/net/xpc/xpc.d.ts" />
/// <reference path="../../../goog/net/xpc/crosspagechannelrole.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/net/xpc/transport.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />

declare module goog.net.xpc.NixTransport {

    /**
     * Global name of the Wrapper VBScript class.
     * Note that this class will be stored in the *global*
     * namespace (i.e. window in browsers).
     * @type {string}
     */
    var NIX_WRAPPER: string;

    /**
     * Global name of the GetWrapper VBScript function. This
     * constant is used by JavaScript to call this function.
     * Note that this function will be stored in the *global*
     * namespace (i.e. window in browsers).
     * @type {string}
     */
    var NIX_GET_WRAPPER: string;

    /**
     * The name of the handle message method used by the wrapper class
     * when calling the transport.
     * @type {string}
     */
    var NIX_HANDLE_MESSAGE: string;

    /**
     * The name of the create channel method used by the wrapper class
     * when calling the transport.
     * @type {string}
     */
    var NIX_CREATE_CHANNEL: string;

    /**
     * A "unique" identifier that is stored in the wrapper
     * class so that the wrapper can be distinguished from
     * other objects easily.
     * @type {string}
     */
    var NIX_ID_FIELD: string;

    /**
     * Determines if the installed version of IE supports accessing window.opener
     * after it has been set to a non-Window/null value. NIX relies on this being
     * possible.
     * @return {boolean} Whether window.opener behavior is compatible with NIX.
     */
    function isNixSupported(): boolean;
}

declare module goog.net.xpc {

    /**
     * NIX method transport.
     *
     * NOTE(user): NIX method tested in all IE versions starting from 6.0.
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this transport
     *     belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class NixTransport extends goog.net.xpc.Transport {
        /**
         * NIX method transport.
         *
         * NOTE(user): NIX method tested in all IE versions starting from 6.0.
         *
         * @param {goog.net.xpc.CrossPageChannel} channel The channel this transport
         *     belongs to.
         * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
         *     the correct window.
         * @constructor
         * @extends {goog.net.xpc.Transport}
         * @final
         */
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
    }
}
