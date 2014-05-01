// Generated Wed Apr 30 22:42:30 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
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
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/containerrenderer.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../goog/ui/separator.d.ts" />
/// <reference path="../../goog/ui/menurenderer.d.ts" />
/// <reference path="../../goog/ui/menuseparator.d.ts" />
/// <reference path="../../goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../goog/ui/menuitem.d.ts" />
/// <reference path="../../goog/ui/container.d.ts" />
/// <reference path="../../goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../goog/ui/menuheader.d.ts" />
/// <reference path="../../goog/ui/menu.d.ts" />
/// <reference path="../../goog/ui/filterobservingmenuitemrenderer.d.ts" />
/// <reference path="../../goog/ui/filterobservingmenuitem.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/inputhandler.d.ts" />

declare module goog.ui.FilteredMenu {

    /**
     * Events fired by component.
     * @enum {string}
     */
    enum EventType { FILTER_CHANGED } 
}

declare module goog.ui {

    /**
     * Filtered menu class.
     * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render filtered
     *     menu; defaults to {@link goog.ui.MenuRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Menu}
     */
    class FilteredMenu extends goog.ui.Menu {
        /**
         * Filtered menu class.
         * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render filtered
         *     menu; defaults to {@link goog.ui.MenuRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Menu}
         */
        constructor(opt_renderer?: goog.ui.MenuRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the filter label (the label displayed in the filter input element if no
         * text has been entered).
         * @param {?string} label Label text.
         */
        setFilterLabel(label: string): void;
    
        /**
         * @return {string} The filter label.
         */
        getFilterLabel(): string;
    
        /**
         * Sets the filter string.
         * @param {?string} str Filter string.
         */
        setFilter(str: string): void;
    
        /**
         * Returns the filter string.
         * @return {string} Current filter or an an empty string.
         */
        getFilter(): string;
    
        /**
         * Sets the index of first item that should be affected by the filter. Menu
         * items with a lower index will not be affected by the filter.
         * @param {number} index Index of first item that should be affected by filter.
         */
        setFilterFromIndex(index: number): void;
    
        /**
         * Returns the index of first item that is affected by the filter.
         * @return {number} Index of first item that is affected by filter.
         */
        getFilterFromIndex(): number;
    
        /**
         * Gets a list of items entered in the search box.
         * @return {!Array.<string>} The entered items.
         */
        getEnteredItems(): string[];
    
        /**
         * Sets whether multiple items can be entered comma separated.
         * @param {boolean} b Whether multiple items can be entered.
         */
        setAllowMultiple(b: boolean): void;
    
        /**
         * @return {boolean} Whether multiple items can be entered comma separated.
         */
        getAllowMultiple(): boolean;
    
        /**
         * Sets whether the specified child should be affected (shown/hidden) by the
         * filter criteria.
         * @param {goog.ui.Component} child Child to change.
         * @param {boolean} persistent Whether the child should be persistent.
         */
        setPersistentVisibility(child: goog.ui.Component, persistent: boolean): void;
    
        /**
         * Returns whether the specified child should be affected (shown/hidden) by the
         * filter criteria.
         * @param {goog.ui.Component} child Menu item to check.
         * @return {boolean} Whether the menu item is persistent.
         */
        hasPersistentVisibility(child: goog.ui.Component): boolean;
    
        /**
         * Handles filter input events.
         * @param {goog.events.BrowserEvent} e The event object.
         */
        handleFilterEvent(e: goog.events.BrowserEvent): void;
    
        /**
         * Returns the filter input element.
         * @return {Element} Input element.
         */
        getFilterInputElement(): Element;
    }
}
