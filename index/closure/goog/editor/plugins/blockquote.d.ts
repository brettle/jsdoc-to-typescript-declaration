// Generated Wed Apr 30 22:39:22 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/iter.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/editor/node.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/editor/command.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/editor/plugin.d.ts" />
/// <reference path="../../../goog/editor/defines.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../goog/editor/browserfeature.d.ts" />

declare module goog.editor.plugins.Blockquote {

    /**
     * Command implemented by this plugin.
     * @type {string}
     */
    var SPLIT_COMMAND: string;

    /**
     * Class ID used to identify this plugin.
     * @type {string}
     */
    var CLASS_ID: string;

    /**
     * Checks if a node is a blockquote node.  If isAlreadySetup is set, it also
     * makes sure the node has the blockquote classname applied.  Otherwise, it
     * ensures that the blockquote does not already have the classname applied.
     * @param {Node} node DOM node to check.
     * @param {boolean} isAlreadySetup True to enforce that the classname must be
     *                  set in order for it to count as a blockquote, false to
     *                  enforce that the classname must not be set in order for
     *                  it to count as a blockquote.
     * @param {boolean} requiresClassNameToSplit Whether only blockquotes with the
     *     class name should be split.
     * @param {string} className The official blockquote class name.
     * @return {boolean} Whether node is a blockquote and if isAlreadySetup is
     *    true, then whether this is a setup blockquote.
     * @deprecated Use {@link #isSplittableBlockquote},
     *     {@link #isSetupBlockquote}, or {@link #isUnsetupBlockquote} instead
     *     since this has confusing behavior.
     */
    function isBlockquote(node: Node, isAlreadySetup: boolean, requiresClassNameToSplit: boolean, className: string): boolean;
}

declare module goog.editor.plugins {

    /**
     * Plugin to handle splitting block quotes.  This plugin does nothing on its
     * own and should be used in conjunction with EnterHandler or one of its
     * subclasses.
     * @param {boolean} requiresClassNameToSplit Whether to split only blockquotes
     *     that have the given classname.
     * @param {string=} opt_className The classname to apply to generated
     *     blockquotes.  Defaults to 'tr_bq'.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class Blockquote extends goog.editor.Plugin {
        /**
         * Plugin to handle splitting block quotes.  This plugin does nothing on its
         * own and should be used in conjunction with EnterHandler or one of its
         * subclasses.
         * @param {boolean} requiresClassNameToSplit Whether to split only blockquotes
         *     that have the given classname.
         * @param {string=} opt_className The classname to apply to generated
         *     blockquotes.  Defaults to 'tr_bq'.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor(requiresClassNameToSplit: boolean, opt_className?: string);
    
        /**
         * Checks if a node is a blockquote which can be split. A splittable blockquote
         * meets the following criteria:
         * <ol>
         *   <li>Node is a blockquote element</li>
         *   <li>Node has the blockquote classname if the classname is required to
         *       split</li>
         * </ol>
         *
         * @param {Node} node DOM node in question.
         * @return {boolean} Whether the node is a splittable blockquote.
         */
        isSplittableBlockquote(node: Node): boolean;
    
        /**
         * Checks if a node is a blockquote element which has been setup.
         * @param {Node} node DOM node to check.
         * @return {boolean} Whether the node is a blockquote with the required class
         *     name applied.
         */
        isSetupBlockquote(node: Node): boolean;
    
        /**
         * Checks if a node is a blockquote element which has not been setup yet.
         * @param {Node} node DOM node to check.
         * @return {boolean} Whether the node is a blockquote without the required
         *     class name applied.
         */
        isUnsetupBlockquote(node: Node): boolean;
    
        /**
         * Gets the class name required for setup blockquotes.
         * @return {string} The blockquote class name.
         */
        getBlockquoteClassName(): string;
    }
}

