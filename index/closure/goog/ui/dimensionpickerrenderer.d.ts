// Generated Fri May  2 15:01:10 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/i18n/bidi.d.ts" />

declare module goog.ui.DimensionPickerRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.DimensionPicker}s.  Renders the
     * palette as two divs, one with the un-highlighted background, and one with the
     * highlighted background.
     *
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class DimensionPickerRenderer extends goog.ui.GoogControlRenderer {
        /**
         * Default renderer for {@link goog.ui.DimensionPicker}s.  Renders the
         * palette as two divs, one with the un-highlighted background, and one with the
         * highlighted background.
         *
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Scales various elements in order to update the palette's size.
         * @param {goog.ui.DimensionPicker} palette The palette object.
         * @param {Element} element The element to set the style of.
         */
        updateSize(palette: goog.ui.DimensionPicker, element: Element): void;
    
        /**
         * Get the element to listen for mouse move events on.
         * @param {goog.ui.DimensionPicker} palette The palette to listen on.
         * @return {Element} The element to listen for mouse move events on.
         */
        getMouseMoveElement(palette: goog.ui.DimensionPicker): Element;
    
        /**
         * Returns the x offset in to the grid for the given mouse x position.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} x The mouse event x position.
         * @return {number} The x offset in to the grid.
         */
        getGridOffsetX(palette: goog.ui.DimensionPicker, x: number): number;
    
        /**
         * Returns the y offset in to the grid for the given mouse y position.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} y The mouse event y position.
         * @return {number} The y offset in to the grid.
         */
        getGridOffsetY(palette: goog.ui.DimensionPicker, y: number): number;
    
        /**
         * Sets the highlighted size. Does nothing if the palette hasn't been rendered.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} columns The number of columns to highlight.
         * @param {number} rows The number of rows to highlight.
         */
        setHighlightedSize(palette: goog.ui.DimensionPicker, columns: number, rows: number): void;
    
        /**
         * Position the mouse catcher such that it receives mouse events past the
         * selectedsize up to the maximum size.  Takes care to not introduce scrollbars.
         * Should be called on enter document and when the window changes size.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         */
        positionMouseCatcher(palette: goog.ui.DimensionPicker): void;
    }
}

