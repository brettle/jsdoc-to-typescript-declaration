// Generated Wed Apr 30 22:38:20 PDT 2014

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
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/dom/savedrange.d.ts" />
/// <reference path="../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../goog/dom/browserrange/browserrange.d.ts" />

declare module goog.dom.TextRange {

    /**
     * Create a new range wrapper from the given browser range object.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Range|TextRange} range The browser range object.
     * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
     *     node.
     * @return {goog.dom.TextRange} A range wrapper object.
     */
    function createFromBrowserRange(range: any /*Range|TextRange*/, opt_isReversed?: boolean): goog.dom.TextRange;

    /**
     * Create a new range wrapper that selects the given node's text.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Node} node The node to select.
     * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
     *     node.
     * @return {goog.dom.TextRange} A range wrapper object.
     */
    function createFromNodeContents(node: Node, opt_isReversed?: boolean): goog.dom.TextRange;

    /**
     * Create a new range wrapper that selects the area between the given nodes,
     * accounting for the given offsets.  Do not use this method directly - please
     * use goog.dom.Range.createFrom* instead.
     * @param {Node} anchorNode The node to start with.
     * @param {number} anchorOffset The offset within the node to start.
     * @param {Node} focusNode The node to end with.
     * @param {number} focusOffset The offset within the node to end.
     * @return {goog.dom.TextRange} A range wrapper object.
     */
    function createFromNodes(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): goog.dom.TextRange;

    /**
     * Tests if the given node is in a document.
     * @param {Node} node The node to check.
     * @return {boolean} Whether the given node is in the given document.
     */
    function isAttachedNode(node: Node): boolean;
}

declare module goog.dom {

    /**
     * Create a new text selection with no properties.  Do not use this constructor:
     * use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractRange}
     * @final
     */
    class TextRange extends goog.dom.AbstractRange {
        /**
         * Create a new text selection with no properties.  Do not use this constructor:
         * use one of the goog.dom.Range.createFrom* methods instead.
         * @constructor
         * @extends {goog.dom.AbstractRange}
         * @final
         */
        constructor();
    
        /**
         * Moves a TextRange to the provided nodes and offsets.
         * @param {Node} startNode The node to start with.
         * @param {number} startOffset The offset within the node to start.
         * @param {Node} endNode The node to end with.
         * @param {number} endOffset The offset within the node to end.
         * @param {boolean} isReversed Whether the range is reversed.
         */
        moveToNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number, isReversed: boolean): void;
    
        /**
         * Surrounds the text range with the specified element (on Mozilla) or with a
         * clone of the specified element (on IE).  Returns a reference to the
         * surrounding element if the operation was successful; returns null if the
         * operation failed.
         * @param {Element} element The element with which the selection is to be
         *    surrounded.
         * @return {Element} The surrounding element (same as the argument on Mozilla,
         *    but not on IE), or null if unsuccessful.
         */
        surroundContents(element: Element): Element;
    }
}
