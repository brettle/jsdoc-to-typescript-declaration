// Generated Wed Apr 30 22:47:07 PDT 2014

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
/// <reference path="../../goog/uri/utils.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/uri/uri.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/dom/xml.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/datasource/datasource.d.ts" />
/// <reference path="../../goog/datasource/expr.d.ts" />
/// <reference path="../../goog/datasource/datamanager.d.ts" />
/// <reference path="../../goog/net/httpstatus.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/net/errorcode.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />
/// <reference path="../../goog/net/xhrlike.d.ts" />
/// <reference path="../../goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../goog/net/xmlhttp.d.ts" />
/// <reference path="../../goog/net/eventtype.d.ts" />
/// <reference path="../../goog/net/xhrio.d.ts" />

declare module goog.ds {

    /**
     * Data source whose backing is an xml node
     *
     * @param {Node} node The XML node. Can be null.
     * @param {goog.ds.XmlDataSource} parent Parent of XML element. Can be null.
     * @param {string=} opt_name The name of this node relative to the parent node.
     *
     * @extends {goog.ds.DataNode}
     * @constructor
     */
    class XmlDataSource extends goog.ds.DataNode {
        /**
         * Data source whose backing is an xml node
         *
         * @param {Node} node The XML node. Can be null.
         * @param {goog.ds.XmlDataSource} parent Parent of XML element. Can be null.
         * @param {string=} opt_name The name of this node relative to the parent node.
         *
         * @extends {goog.ds.DataNode}
         * @constructor
         */
        constructor(node: Node, parent: goog.ds.XmlDataSource, opt_name?: string);
    }

    /**
     * Data source whose backing is an XMLHttpRequest,
     *
     * A URI of an empty string will mean that no request is made
     * and the data source will be a single, empty node.
     *
     * @param {(string,goog.Uri)} uri URL of the XMLHttpRequest.
     * @param {string} name Name of the datasource.
     *
     * implements goog.ds.XmlHttpDataSource.
     * @constructor
     * @extends {goog.ds.XmlDataSource}
     * @final
     */
    class XmlHttpDataSource extends goog.ds.XmlDataSource {
        /**
         * Data source whose backing is an XMLHttpRequest,
         *
         * A URI of an empty string will mean that no request is made
         * and the data source will be a single, empty node.
         *
         * @param {(string,goog.Uri)} uri URL of the XMLHttpRequest.
         * @param {string} name Name of the datasource.
         *
         * implements goog.ds.XmlHttpDataSource.
         * @constructor
         * @extends {goog.ds.XmlDataSource}
         * @final
         */
        constructor(uri: any /*missing*/, name: string);
    }
}

